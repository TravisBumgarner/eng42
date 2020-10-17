import os
import json

content_dir = "Z:\Programming\eng42\src\content"

for filename in os.listdir(content_dir):
    if ".json" not in filename or filename in ["skills.json", "categories.json"]:
        continue
    abs_path = os.path.join(content_dir, filename)
    with open(abs_path, "r") as f:
        contents = json.load(f)
        slug = contents['id']
    new_filename = f'{slug}.json'
    abs_new_path = abs_path.replace(filename, new_filename)
    os.rename(abs_path, abs_new_path)

    with open(os.path.join(content_dir, 'index.tsx'), "r") as f:
        contents = f.read()
    contents = contents.replace(f'./{filename}', f'./{new_filename}')

    with open(os.path.join(content_dir, 'index.tsx'), "w") as f:
        f.write(contents)
