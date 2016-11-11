import { Pipe, PipeTransform  } from "@angular/core"

@Pipe({ name:'capitalize'})
export class Capitalize implements PipeTransform {
    transform(value: string): string {
        let upperCased = value.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
        return upperCased;
    }
}