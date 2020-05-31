from slugify import slugify
import os
import json

content_dir = '/mnt/c/Users/Travis/Programming/eng41/src/content'

for filename in os.listdir(content_dir):   
    if '.json' not in filename or filename in ['skills.json', 'categories.json']:
        continue
    
    abs_path = os.path.join(content_dir, filename)
    with open(abs_path, 'r') as f:
        json_data = json.load(f)
        json_data['id'] = slugify(json_data['name'])
    with open(abs_path, 'w') as f:
        json.dump(json_data, f)
    


