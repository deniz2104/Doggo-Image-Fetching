async function loadImageFromJSON() {
    try {
        const timestamp = new Date().getTime();
        const res = await fetch(`https://dog.ceo/api/breeds/image/random?timestamp=${timestamp}`);
        
        if (!res.ok) {
            throw new Error('Failed to fetch image');
        }

        const jsonData = await res.json();
        const imageUrl = jsonData.message;

        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.src = imageUrl;

        img.onload = function () {
            const canvas = document.getElementById('imageCanvas');
            const ctx = canvas.getContext('2d');

            canvas.width = img.width;
            canvas.height = img.height * 2;

            ctx.drawImage(img, 0, 0);

            const originalImage = document.getElementById('originalImage');
            originalImage.src = img.src;

            const imageData = ctx.getImageData(0, 0, img.width, img.height);
            const data = imageData.data;

            const mirroredData = new Uint8ClampedArray(data);

            for (let y = 0; y < img.height; y++) {
                for (let x = 0; x < img.width / 2; x++) {
                    const index = (y * img.width + x) * 4;
                    const mirrorIndex = ((y + 1) * img.width - x - 1) * 4;

                    for (let i = 0; i < 4; i++) {
                        const temp = mirroredData[index + i];
                        mirroredData[index + i] = mirroredData[mirrorIndex + i];
                        mirroredData[mirrorIndex + i] = temp;
                    }
                }
            }

            const mirroredImageData = new ImageData(mirroredData, img.width, img.height);
            ctx.putImageData(mirroredImageData, 0, img.height);

            const mirroredImage = document.getElementById('mirroredImage');
            mirroredImage.src = canvas.toDataURL();
        };
    } catch (error) {
        console.error('Error loading or processing image:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadImageFromJSON);
