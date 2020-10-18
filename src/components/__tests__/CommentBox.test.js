import React from 'react';
import {mount} from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapper;

beforeEach(() => {
    wrapper = mount(
        <Root>
             <CommentBox />
        </Root>
        );
});

afterEach(() => {
    wrapper.unmount();
});

it('has a text area and a button', () => {
    //console.log(wrapper.find('textarea').length);
    //console.log(wrapper.find('button').length);
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
});

describe('the textbox', () => {

    beforeEach(() => {
        wrapper.find('textarea').simulate('change',{
            target: {value: 'new comment'}
        });
        wrapper.update();
    });

    it('has a textarea that user can type in',() => {
        expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
    });

    it('when form is submitted, text area gets emptied',() => {
        expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
        // wrapper.find('button').simulate('submit');
        wrapper.find('form').simulate('submit');
        wrapper.update();
        expect(wrapper.find('textarea').prop('value')).toEqual('');
    });
});