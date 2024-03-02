import argparse
import os
from moviepy.editor import VideoFileClip

def convert_mov_to_mp4(input_file, output_file=None, codec='libx264', audio_codec='aac', bitrate='1024k'):
    # Load the MOV video clip
    video_clip = VideoFileClip(input_file)

    # Set default output file path if not provided
    if output_file is None:
        # Replace the extension of the input file with '.mp4'
        output_file = os.path.splitext(input_file)[0] + '.mp4'

    # Set output format and codec options
    output_options = {
        'codec': codec,
        'audio_codec': audio_codec,
        'bitrate': bitrate,
    }

    # Convert and write to the output file
    video_clip.write_videofile(output_file, **output_options)

def main():
    parser = argparse.ArgumentParser(description='Convert MOV to MP4 with optional settings')
    parser.add_argument('input_file', help='Path to the input MOV file')
    parser.add_argument('--output_file', help='Path to the output MP4 file (default: input file with .mp4 extension)')
    parser.add_argument('--codec', default='libx264', help='Video codec (default: libx264)')
    parser.add_argument('--audio_codec', default='aac', help='Audio codec (default: aac)')
    parser.add_argument('--bitrate', default='1024k', help='Bitrate for the video (default: 1024k)')
    parser.add_argument('--resolution', default='1280x720', help='Resolution of the output video (default: 1280x720)')

    args = parser.parse_args()

    convert_mov_to_mp4(
        args.input_file,
        output_file=args.output_file,
        codec=args.codec,
        audio_codec=args.audio_codec,
        bitrate=args.bitrate,
        resolution=args.resolution
    )

if __name__ == "__main__":
    main()
