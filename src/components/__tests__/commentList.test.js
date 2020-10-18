import React from 'react';
import {mount} from 'enzyme';
import Root from 'Root';
import CommentList from 'components/CommentList';

let wrapper;

beforeEach(() => {
    const initialState = {
        comments: ['comment 1','comment 2']
    }
    wrapper = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    )
});

it('creates one Li per comment', () => {
    expect(wrapper.find('li').length).toEqual(2);
})

it('shows the text for each comment',() => {
   expect(wrapper.render().text().toContain();
})