from PIL import Image
import argparse
import os

MAX_SIZE_MB = .8

def resize_image(im, max_size_mb):
    max_size_bytes = max_size_mb * 1024 * 1024
    original_size = os.path.getsize(im.filename)

    if original_size <= max_size_bytes:
        return im  # No need to resize if within the limit

    aspect_ratio = im.width / im.height
    new_width = int((max_size_bytes / original_size) ** 0.5 * im.width)
    new_height = int(new_width / aspect_ratio)

    resized_im = im.resize((new_width, new_height))
    return resized_im

def convert_to_png(input_path, output_path, max_size_mb):
    try:
        with Image.open(input_path) as im:
            resized_im = resize_image(im, max_size_mb)

            resized_im.save(output_path, 'PNG')
            print(f"Conversion successful: {input_path} -> {output_path}")

            os.remove(input_path)
            print(f"Removed original file: {input_path}")
    except Exception as e:
        print(f"Error converting {input_path}: {str(e)}")

def convert_folder_to_png(folder_path):
    for filename in os.listdir(folder_path):
        if filename.endswith(".png"):
            jpg_path = os.path.join(folder_path, filename)
            png_path = os.path.join(folder_path, os.path.splitext(filename)[0] + ".png")
            convert_to_png(jpg_path, png_path, MAX_SIZE_MB)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Convert JPG images to PNG format using PIL.')
    parser.add_argument('-path', type=str, help='Specify the path of the photo or folder to convert.')
    
    args = parser.parse_args()

    if args.path:
        path = args.path
        if os.path.isfile(path):
            output_path = os.path.splitext(path)[0] + ".png"
            convert_to_png(path, output_path, MAX_SIZE_MB)
        elif os.path.isdir(path):
            convert_folder_to_png(path)
        else:
            print(f"Error: {path} is not a valid file or folder path.")
    else:
        print("Error: Please provide a valid path using the -path flag.")
