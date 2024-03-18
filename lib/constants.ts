import { Option } from '@/components/SelectableInput';

export const getCountries = () =>
  [
    { code: 'ad', name: 'Andorra' },
    { code: 'ae', name: 'United Arab Emirates' },
    { code: 'af', name: 'Afghanistan' },
    { code: 'ag', name: 'Antigua and Barbuda' },
    { code: 'ai', name: 'Anguilla' },
    { code: 'al', name: 'Albania' },
    { code: 'am', name: 'Armenia' },
    { code: 'ao', name: 'Angola' },
    { code: 'aq', name: 'Antarctica' },
    { code: 'ar', name: 'Argentina' },
    { code: 'as', name: 'American Samoa' },
    { code: 'at', name: 'Austria' },
    { code: 'au', name: 'Australia' },
    { code: 'aw', name: 'Aruba' },
    { code: 'ax', name: 'Åland Islands' },
    { code: 'az', name: 'Azerbaijan' },
    { code: 'pk', name: 'Pakistan' },
    { code: 'ae', name: 'United Arab Emirates' },
    { code: 'ps', name: 'Palestine' },
    { code: 'sa', name: 'Saudi Arabia' },
    { code: 'af', name: 'Afghanistan' },
  ].map((country) => ({
    ...country,
    label: country.name,
    value: country.code,
  }));
export interface Country extends Partial<Option> {
  code: string;
  name: string;
}
