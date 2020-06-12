import os

content_dir = "/mnt/c/Users/Travis/Programming/eng41/src/content"

for filename in os.listdir(content_dir):
    if ".json" not in filename or filename in ["skills.json", "categories.json"]:
        continue
    abs_path = os.path.join(content_dir, filename)
    print("run once")
    with open(abs_path, "r") as f:
        contents = f.read()
    contents = contents.replace('"category":', '"categories":')
    contents = contents.replace('"organization":', '"organizations":')
    contents = contents.replace('"location":', '"locations":')
    contents = contents.replace('"skill":', '"skills":')
    contents = contents.replace('"image":', '"images":')
    contents = contents.replace('"link":', '"links":')
    with open(abs_path, "w") as f:
        f.write(contents)
