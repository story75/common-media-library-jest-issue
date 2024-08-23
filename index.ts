import { getId3Frames } from '@svta/common-media-library';

export function foo() {
    const messageData = new Uint8Array([]);
    const id3Frames = getId3Frames(messageData);
    console.log(id3Frames);
}