const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function captureScreenshots() {
    const browser = await puppeteer.launch({
        headless: 'new',
        defaultViewport: {
            width: 1920,
            height: 1080
        }
    });

    // Create screenshots directory if it doesn't exist
    const screenshotsDir = path.join(__dirname, 'screenshots');
    if (!fs.existsSync(screenshotsDir)) {
        fs.mkdirSync(screenshotsDir);
    }

    try {
        // Screenshot 1: Infographic v2
        console.log('Capturing infographic screenshot...');
        const page1 = await browser.newPage();
        await page1.goto(`file://${path.join(__dirname, 'anthropic_reward_hacking_infographic_v2.html')}`, {
            waitUntil: 'networkidle0'
        });
        await page1.screenshot({
            path: path.join(screenshotsDir, 'infographic-hero.png'),
            fullPage: false
        });

        // Capture full page as well
        await page1.screenshot({
            path: path.join(screenshotsDir, 'infographic-full.png'),
            fullPage: true
        });
        console.log('✓ Infographic screenshots captured');
        await page1.close();

        // Screenshot 2: Interactive Art
        console.log('Capturing interactive art screenshot...');
        const page2 = await browser.newPage();
        await page2.goto(`file://${path.join(__dirname, 'emergent_corruption_interactive.html')}`, {
            waitUntil: 'networkidle0'
        });

        // Wait for animation to start
        await new Promise(resolve => setTimeout(resolve, 3000));

        await page2.screenshot({
            path: path.join(screenshotsDir, 'interactive-art.png'),
            fullPage: false
        });
        console.log('✓ Interactive art screenshot captured');
        await page2.close();

        // Screenshot 3: Original infographic
        console.log('Capturing original infographic screenshot...');
        const page3 = await browser.newPage();
        await page3.goto(`file://${path.join(__dirname, 'anthropic_reward_hacking_infographic.html')}`, {
            waitUntil: 'networkidle0'
        });
        await page3.screenshot({
            path: path.join(screenshotsDir, 'infographic-v1.png'),
            fullPage: false
        });
        console.log('✓ Original infographic screenshot captured');
        await page3.close();

        console.log('\n✅ All screenshots captured successfully!');
        console.log(`Screenshots saved to: ${screenshotsDir}`);

    } catch (error) {
        console.error('Error capturing screenshots:', error);
    } finally {
        await browser.close();
    }
}

captureScreenshots();
