import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils';
import Footer from '@/widgets/Footer.vue';

describe('Footer', () => {
    it('renders the component with current year', () => {
        const wrapper = mount(Footer);
        const currentYear = new Date().getFullYear();
        expect(wrapper.text()).toContain(`© ${currentYear} Cocktail App. All rights reserved.`);
    });
});