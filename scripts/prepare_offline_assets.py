from pathlib import Path
from PIL import Image

SOURCE = Path('/home/ubuntu/webdev-static-assets')
OUTPUT = SOURCE / 'offline-assets'
OUTPUT.mkdir(parents=True, exist_ok=True)

def export_webp(source: Path, name: str, max_size: tuple[int, int], quality: int = 82) -> None:
    with Image.open(source) as image:
        image = image.convert('RGB')
        image.thumbnail(max_size, Image.Resampling.LANCZOS)
        image.save(OUTPUT / name, 'WEBP', quality=quality, method=6)

def export_png(source: Path, name: str, max_size: tuple[int, int]) -> None:
    with Image.open(source) as image:
        image.thumbnail(max_size, Image.Resampling.LANCZOS)
        image.save(OUTPUT / name, 'PNG', optimize=True)

export_png(SOURCE / 'europcar-user-logo.png', 'europcar-logo.png', (256, 256))
export_webp(SOURCE / 'terminal-signal-hero.jpg', 'terminal-hero.webp', (1280, 720), 80)
export_webp(SOURCE / 'antalya-europcar-guide' / 'terminal-2-europcar-office.jpg', 'terminal-2-office.webp', (960, 1280), 84)
export_webp(SOURCE / 'antalya-europcar-guide' / 'terminal-1-europcar-office.jpeg', 'terminal-1-office.webp', (960, 1280), 84)
export_webp(SOURCE / 'parking-transfer.jpg', 'parking-transfer.webp', (1280, 960), 80)

for asset in sorted(OUTPUT.iterdir()):
    print(f'{asset.name}: {asset.stat().st_size} bytes')
