from PIL import Image
import os

def compress_images_in_public(size_threshold_kb=500, quality=85):
    """
    Compress images in all directories under the 'public' folder if they meet the criteria:
    - Image is not already in the corresponding '-compressed' directory.
    - Image in the '-compressed' directory exists but is above the size threshold.
    - Resize images based on a maximum resolution.
    - Save compressed images in WebP format.

    Args:
        size_threshold_kb (int): The file size threshold in kilobytes. Images larger than this will be compressed.
        max_resolution (tuple): The maximum resolution (width, height) to which images should be resized.
        quality (int): The quality setting for the compressed images (1-100). Lower numbers produce smaller files.

    Returns:
        None
    """
    # Define the root directory (public folder)
    public_dir = 'src/assets/clouds'  # Adjust this path if needed

    # Supported image formats
    supported_formats = ('.jpg', '.jpeg', '.png')

    # Convert threshold from kilobytes to bytes
    size_threshold = size_threshold_kb * 1024

    # Traverse through all directories in the public folder
    for dirpath, dirnames, filenames in os.walk(public_dir):
        for filename in filenames:
            # Check if the file is an image and is in the supported formats
            if filename.lower().endswith(supported_formats):
                original_image_path = os.path.join(dirpath, filename)
                
                # Determine the corresponding '-compressed' directory
                compressed_dir = f"{dirpath}-compressed"
                if not os.path.exists(compressed_dir):
                    os.makedirs(compressed_dir)

                # Save the compressed images as WebP
                compressed_image_path = os.path.join(compressed_dir, filename.rsplit('.', 1)[0] + '.webp')

                # Check if the compressed image exists and meets the size requirements
                if not os.path.exists(compressed_image_path):
                    if os.path.getsize(original_image_path) > size_threshold:
                        try:
                            with Image.open(original_image_path) as img:
                                # Resize image if it exceeds the maximum resolution
                                #img.thumbnail(max_resolution)

                                # Compress and save the image in the '-compressed' directory as WebP
                                img.save(compressed_image_path, format='WEBP', optimize=True, quality=quality)
                                print(f"Compressed and saved: {compressed_image_path}")
                        except Exception as e:
                            print(f"Failed to compress {original_image_path}: {e}")

# Example usage
compress_images_in_public(size_threshold_kb=500, quality=85)
