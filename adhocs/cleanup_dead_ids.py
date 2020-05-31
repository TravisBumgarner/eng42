from slugify import slugify
import os
import json

content_dir = "/mnt/c/Users/Travis/Programming/eng41/src/content"

for filename in os.listdir(content_dir):
    if ".json" not in filename or filename in ["skills.json", "categories.json"]:
        continue

    abs_path = os.path.join(content_dir, filename)
    with open(abs_path, "r") as f:
        json_data = json.load(f)
        modified_org_data = [x["name"] for x in json_data["organization"]]
        json_data["organization"] = modified_org_data

        modified_location_data = [x["name"] for x in json_data["location"]]
        json_data["location"] = modified_location_data

        modified_image_data = [
            {"name": item["name"], "src": item["src"]} for item in json_data["image"]
        ]
        json_data["image"] = modified_image_data

        modified_link_data = [
            {"name": item["name"], "src": item["src"]} for item in json_data["link"]
        ]
        json_data["link"] = modified_link_data

        del json_data["preview_img"]["id"]

    with open(abs_path, "w") as f:
        json.dump(json_data, f)
