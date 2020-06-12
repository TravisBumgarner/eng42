from slugify import slugify
import os
import json

root_media_dir = '/mnt/c/Users/Travis/Programming/eng41/media'
content_dir = '/mnt/c/Users/Travis/Programming/eng41/src/content'

for filename in os.listdir(content_dir):   
    if '.json' not in filename or filename in ['skills.json', 'categories.json']:
        continue

    abs_path = os.path.join(content_dir, filename)
    with open(abs_path, 'r') as f:
        json_data = json.load(f)

        media_dir = json_data['id']
        new_media_dir = os.path.join(root_media_dir, media_dir)
        if not os.path.isdir(new_media_dir):
            os.mkdir(new_media_dir)

        images = json_data['image']
        for image in images:
            from_location = os.path.join(root_media_dir, image['src'])
            to_location = os.path.join(new_media_dir, image['src'])
            os.rename(from_location, to_location)

            image['src'] = f"{media_dir}/{image['src']}"
        
        from_location = os.path.join(root_media_dir, json_data['preview_img']['src'])
        to_location = os.path.join(new_media_dir, json_data['preview_img']['src'])
        os.rename(from_location, to_location)
        media_dir = json_data['id']
        json_data['preview_img']['src'] = f"{media_dir}/{json_data['preview_img']['src']}"


        json_data['image'] = images
    with open(abs_path, 'w') as f:
        json.dump(json_data, f)
    


