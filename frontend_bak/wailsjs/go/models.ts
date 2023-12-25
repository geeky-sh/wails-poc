export namespace main {
	
	export class Session {
	    roll_num: string;
	    name: string;
	
	    static createFrom(source: any = {}) {
	        return new Session(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.roll_num = source["roll_num"];
	        this.name = source["name"];
	    }
	}

}

