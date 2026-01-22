#!/bin/bash

# Create directories
mkdir -p src/assets/images
mkdir -p src/assets/fonts

echo "📥 Downloading images..."

# Download images from Unsplash
curl -L -o src/assets/images/ocean-storm.jpg "https://images.unsplash.com/photo-1545289710-d04a48e2e6c4?w=1080&q=80"
echo "✅ ocean-storm.jpg"

curl -L -o src/assets/images/pirate-ship.jpg "https://images.unsplash.com/photo-1709940963560-61f001b7f592?w=1080&q=80"
echo "✅ pirate-ship.jpg"

curl -L -o src/assets/images/compass.jpg "https://images.unsplash.com/photo-1581684226333-5b0f318f412b?w=1080&q=80"
echo "✅ compass.jpg"

curl -L -o src/assets/images/treasure-map.jpg "https://images.unsplash.com/photo-1618385418700-35dc948cdeec?w=1080&q=80"
echo "✅ treasure-map.jpg"

curl -L -o src/assets/images/wooden-planks.jpg "https://images.unsplash.com/photo-1738965742812-bc1f957c01e9?w=1080&q=80"
echo "✅ wooden-planks.jpg"

curl -L -o src/assets/images/treasure-chest.jpg "https://images.unsplash.com/photo-1632809199725-72a4245e846b?w=1080&q=80"
echo "✅ treasure-chest.jpg"

echo ""
echo "📥 Downloading fonts..."

# Download Google Fonts
curl -L -o src/assets/fonts/PirataOne-Regular.ttf "https://github.com/google/fonts/raw/main/ofl/pirataone/PirataOne-Regular.ttf"
echo "✅ PirataOne-Regular.ttf"

curl -L -o src/assets/fonts/Cinzel-Regular.ttf "https://github.com/google/fonts/raw/main/ofl/cinzel/Cinzel-Regular.ttf"
echo "✅ Cinzel-Regular.ttf"

curl -L -o src/assets/fonts/Cinzel-Bold.ttf "https://github.com/google/fonts/raw/main/ofl/cinzel/Cinzel-Bold.ttf"
echo "✅ Cinzel-Bold.ttf"

curl -L -o src/assets/fonts/UnifrakturMaguntia-Regular.ttf "https://github.com/google/fonts/raw/main/ofl/unifrakturmaguntia/UnifrakturMaguntia-Book.ttf"
echo "✅ UnifrakturMaguntia-Regular.ttf"

echo ""
echo "🎉 All assets downloaded!"
echo "Now run: npm run dev"
