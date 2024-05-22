/* The AudioManager class in JavaScript handles loading and playing sound effects using the Web Audio
API. */
class AudioManager {
    constructor() {
        this.audioContext = new (window.AudioContext || window.AudioContext)();
        this.soundEffects = {};
    }

    /**
     * The function `loadSoundEffect` asynchronously loads a sound effect from a given URL, decodes it,
     * and stores it in an object.
     * @param url - The `url` parameter in the `loadSoundEffect` function is the URL from which the
     * sound effect file will be fetched and loaded.
     */
    async loadSoundEffect(url) {
        try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
        this.soundEffects[url] = audioBuffer;
        console.log(`Loaded sound effect: ${url}`);
        } catch (error) {
        console.error(`Error loading sound effect (${url}):`, error);
        }
    }

    /**
     * The `playSoundEffect` function plays a sound effect from a specified URL using the Web Audio
     * API.
     * @param url - The `url` parameter in the `playSoundEffect` function is a string that represents
     * the URL or key to access a specific sound effect in the `soundEffects` object.
     */
    playSoundEffect(url) {
        if (this.soundEffects[url]) {
        const source = this.audioContext.createBufferSource();
        source.buffer = this.soundEffects[url];
        source.connect(this.audioContext.destination);
        source.start();
        } else {
        console.warn(`Sound effect not found: ${url}`);
        }
    }
}
