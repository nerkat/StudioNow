import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'plan2color' })
export class plan2color implements PipeTransform {
    transform(value: string, exponent?: string): string {
        switch (value) {
            case 'Premium':
                return 'info'
            case 'Pro':
                return 'warning'
            case 'Basic':
                return 'danger'
            default:
                break;
        }
        return value;
    }
}