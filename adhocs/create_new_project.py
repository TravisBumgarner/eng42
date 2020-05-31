from slugify import slugify
import os
import json

# Update these values if switching local development machines
root_media_dir = "/mnt/c/Users/Travis/Programming/eng41/media"
content_dir = "/mnt/c/Users/Travis/Programming/eng41/src/content"


class Project:
    def __init__(self):
        pass

    def populate_data(self):
        self.data = {}
        self.data["name"] = input("Name: ")
        self.data["id"] = slugify(self.data["name"])
        self.data["category"] = self.get_categories()
        self.data["organization"] = self.get_organization()
        self.data["location"] = self.get_location()
        self.data["headline"] = ""
        self.data["description"] = ""
        self.data["start_date"] = self.get_date(is_end_date=False)
        self.data["end_date"] = self.get_date(is_end_date=True)
        self.data["skill"] = self.get_skills()
        self.data["image"] = self.get_images()
        self.data["link"] = self.get_links()
        self.data["preview_img"] = self.get_preview_img()

    def get_date(self, is_end_date):
        while True:
            date = input(
                f"""Enter {"end_date" if is_end_date else "start_date"} date (yyyy-mm-dd){"or 'Ongoing'" if is_end_date else ""}: """
            )
            try:
                if is_end_date and date == "Ongoing":
                    break
                y, m, d = date.split("-")
                if (
                    len(y) == 4
                    and len(m) == 2
                    and len(d) == 2
                    and y.isnumeric()
                    and m.isnumeric()
                    and d.isnumeric()
                ):
                    break
            except:
                continue
        return date

    def get_categories(self):
        return []

    def get_location(self):
        return "foo"

    def get_organization(self):
        return "foo"

    def get_skills(self):
        return "foo"

    def get_preview_img(self):
        return "foo"

    def get_images(self):
        return "foo"

    def get_links(self):
        return "foo"

    def save_to_json(self):
        max_filename = -1
        for filename in os.listdir(content_dir):

            name, ext = filename.split(".")
            if name.isnumeric() and int(name) > max_filename and ext == "json":
                max_filename = int(name)
        new_file = max_filename + 1
        with open(os.path.join(content_dir, f"{str(new_file)}.json"), "w") as f:
            json.dump(self.data, f)


project = Project()
project.populate_data()
project.save_to_json()
