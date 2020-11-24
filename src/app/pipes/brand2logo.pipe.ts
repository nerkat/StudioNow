import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'brand2logo' })
export class brand2logo implements PipeTransform {
    transform(value: string, exponent?: string): string {
        switch (value) {
            case 'Coca-Cola':
                return 'logo-coca-cola'
            case 'Apple':
                return 'logo-apple'
            case 'T-Mobile':
                return 'logo-t-mobile'
            case 'JP Morgan Chase':
                return 'logo-jp'
            case 'PayPal':
                return 'logo-paypal'
            case 'Walmart':
                return 'logo-walmart'
            case 'Walt Disney':
                return 'logo-wd'
            default:
                break;
        }
        return value;
    }
}