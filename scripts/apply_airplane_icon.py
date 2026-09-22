from pathlib import Path
from PIL import Image

PROJECT = Path('/home/ubuntu/antalya-europcar-guide')
SOURCE = Path('/home/ubuntu/webdev-static-assets/europcar-airplane-antalya-launcher-icon.png')
ANDROID_RES = PROJECT / 'android/app/src/main/res'
PUBLIC_ASSETS = PROJECT / 'client/public/offline-assets'

GREEN = '#009900'

def save_icon(size: int, destination: Path) -> None:
    with Image.open(SOURCE) as image:
        image = image.convert('RGB').resize((size, size), Image.Resampling.LANCZOS)
        image.save(destination, 'PNG', optimize=True)

def save_splash(destination: Path) -> None:
    with Image.open(SOURCE) as icon, Image.open(destination) as previous:
        icon = icon.convert('RGB')
        canvas = Image.new('RGB', previous.size, GREEN)
        scale = int(min(previous.size) * 0.56)
        badge = icon.resize((scale, scale), Image.Resampling.LANCZOS)
        x = (canvas.width - badge.width) // 2
        y = (canvas.height - badge.height) // 2
        canvas.paste(badge, (x, y))
        canvas.save(destination, 'PNG', optimize=True)

launcher_sizes = {
    'mipmap-mdpi': 48,
    'mipmap-hdpi': 72,
    'mipmap-xhdpi': 96,
    'mipmap-xxhdpi': 144,
    'mipmap-xxxhdpi': 192,
}

for density, size in launcher_sizes.items():
    folder = ANDROID_RES / density
    for name in ('ic_launcher.png', 'ic_launcher_round.png', 'ic_launcher_foreground.png'):
        save_icon(size, folder / name)

PUBLIC_ASSETS.mkdir(parents=True, exist_ok=True)
save_icon(512, PUBLIC_ASSETS / 'europcar-airplane-icon.png')

for splash in ANDROID_RES.glob('drawable*/splash.png'):
    save_splash(splash)

print('Applied airplane icon to launcher, splash, and offline favicon asset.')
