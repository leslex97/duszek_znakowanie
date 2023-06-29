import json
import os
cwd = os.getcwd()

cwd = cwd + '/photos/'
photos = []
files = os.listdir(cwd)
for file in files:
    if file.endswith('.jpg') or file.endswith('.png') or file.endswith('.bmp'):
        photos.append(file)

print(photos)


def write_json(new_data, filename='photos_list.json'):
    with open(filename,'w') as file:
        json.dump(new_data, file)

x = {"photos": photos}
     
write_json(x)
