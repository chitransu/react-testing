import React from 'react';
import {shallow} from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<App />);
});

it('shows a comment box',() => {
    //const div = document.createElement('div');
    //ReactDom.render(<App />, div);
    //console.log(div.innerHTML);
    //expect(div.innerHTML).toContain('Comment Box');
    //ReactDom.unmountComponentAtNode(div);
    // Above code is just to expect the component when we are not using any library like (Enzyme)

    //find will return array
    expect(wrapper.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
    expect(wrapper.find(CommentList).length).toEqual(1);
});