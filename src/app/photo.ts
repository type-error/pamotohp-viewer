export class Photo {
    id: string;
    originalWidth: number;
    originalHeight: number;
    width: number;
    height: number;
    location: any;
    rotation: number;
    time: string;
    mimeType: string;
    country: string;
    state: string;

    constructor(o: any){
        this.id = o.id;
        this.originalWidth = o.originalWidth;
        this.originalHeight = o.originalHeight;
        this.width = o.width;
        this.height = o.height;
        this.location = o.location;
        this.rotation = o.rotation;
        this.time = o.time;
        this.mimeType = o.mimeType;
        this.country = o.country;
        this.state = 'inactive';
    }

    toggleState() {
        this.state = (this.state === 'active' ? 'inactive' : 'active');
    }

    reset() {
        this.state = 'inactive';
    }
}
