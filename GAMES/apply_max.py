import glob
import re

html_files = glob.glob('*.html')

for f in html_files:
    if f == 'index.html':
        continue # Don't scale index.html as it breaks the grid

    try:
        with open(f, 'r', encoding='utf-8') as file:
            c = file.read()
        
        # Ensure 3D perspective via specific transform rules per game canvas instead of replacing standard rules that might not trigger correctly
        if 'transform-origin: center center;' not in c:
            c = re.sub(r'(canvas.*?,.*?\.glass-panel\s*\{)', 
                       r'\1\n    transform: perspective(1000px) rotateX(10deg) scale(1.02) !important;\n    transform-origin: center center;', 
                       c)
        
        # Maximize Dashboard (Increase native Canvas resolution)
        # Search for fixed dimensions and upscale them explicitly based on current exact size mappings
        c = re.sub(r'width="400" height="500"', 'width="800" height="700"', c) # Car Racer
        c = re.sub(r'width="600" height="700"', 'width="800" height="700"', c) # Partially updated Car Racer
        c = re.sub(r'width="600" height="150"', 'width="900" height="300"', c) # Dino
        c = re.sub(r'width="480" height="320"', 'width="800" height="600"', c) # Breakout
        c = re.sub(r'width="400" height="400"', 'width="700" height="700"', c) # XO / Snake
        c = re.sub(r'width="600" height="400"', 'width="800" height="600"', c) # Sky Pilot
        
        with open(f, 'w', encoding='utf-8') as file:
            file.write(c)
        print(f"Added 3D animations & Scaled canvas in {f}")
    except Exception as e:
        print(f"Error {f}: {e}")
