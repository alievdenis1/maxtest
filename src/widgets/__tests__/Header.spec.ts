import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils';
import Header from '@/widgets/Header.vue';

describe('Header', () => {
    it('renders the component', () => {
        const wrapper = mount(Header);
        expect(wrapper.find('h1').text()).toBe('Cocktail App');
    });
});