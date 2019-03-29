import requests
import json
import os

# Run Script
# Copy /content dir to ./App

r = requests.get(" https://eng40api.travisbumgarner.com/projects/")
r_json = r.json()

os.mkdir("./content")
export = []
for record in r_json.values():
    print(record["id"])
    index_file = open("./content/index.js", "a")
    index_file.write(
        "import file_{} from './{}.json'\n".format(record["id"], record["id"])
    )
    index_file.close()
    export.append("file_{}".format(record["id"]))
    f = open("./content/{}.json".format(record["id"]), "a")
    f.write(json.dumps(record))
    f.close()
index_file = open("./content/index.js", "a")
index_file.write("\n\n export default [{}]".format(",".join(export)))
index_file.close()
