# example.py


if __name__ == "__main__":
    import sys

    # Check if a function name is provided as a command-line argument
    if len(sys.argv) > 1:
        arg = sys.argv[1]
        print("hiii from python" , arg)
    else:
        print("No arg specified")
