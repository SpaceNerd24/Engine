class AudioManager {
    constructor() {
        this.audioContext = new (window.AudioContext || window.AudioContext)();
        this.soundEffects = {};
    }


    async loadSoundEffect(url) {
        try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
        this.soundEffects[url] = audioBuffer;
        consoleLog(`Loaded sound effect: ${url}`);
        } catch (error) {
        console.error(`Error loading sound effect (${url}):`, error);
        }
    }

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
