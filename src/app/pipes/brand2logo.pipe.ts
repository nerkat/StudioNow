import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'brand2logo' })
export class brand2logo implements PipeTransform {
    transform(value: string, exponent?: string): string {
        switch (value) {
            case 'Premium':
                return 'primary'
            case 'Pro':
                return 'secondary'
            case 'Basic':
                return 'danger'
            default:
                break;
        }
        return value;
    }
}