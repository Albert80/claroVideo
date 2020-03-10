import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Claro from './containers/Claro';
import { BrowserRouter, withRouter } from 'react-router-dom';
import results from './redux/reducers/results';
import searchResults from './redux/reducers/searchResults';
import TestRenderer from 'react-test-renderer';
import Header from './components/Header';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('results reducer returns results an array of objects', () => {
  const expected = new Array({id: 1}, {id: 3});
  const reducerResult = results([], 
                                {
                                  type: 'findResults',
                                  payload: { 
                                    response: {
                                      groups: [{id: 1}, {id: 3}],
                                    }
                                  }
                                }
                              );
  expect(reducerResult).toEqual(expected);
});

test('results reducer returns results an empty array', () => {
  const reducerResult = results([], 
                                {
                                  type: 'findResults',
                                  payload: { 
                                    response: {
                                      groups: [],
                                    }
                                  }
                                }
                              );
  expect(reducerResult).toEqual([]);
});

test('results reducer returns default data', () => {
  const expected = new Array(1,2,3,4);
  const reducerResult = results([1,2,3,4], 
                                {
                                  type: '',
                                  payload: { 
                                    response: {
                                      groups: [],
                                    }
                                  }
                                }
                              );
  expect(reducerResult).toEqual(expected);
});

test('search results reducer return list with length=2', () => {  
  const reducerResult = searchResults([], {
    type: 'searchItems',
    payload: 'Carlos',
    source: [
      {id: 1, title: 'Carlos V', description: 'El mejor chocolate de México'},
      {id: 2, title: 'El chavo del 8', description: 'La serie más memorable de Chespirito'},
      {id: 3, title: 'Carlos Alberto', description: 'El chico con nombre de telenovela'},
      {id: 4, title: 'Ed, Edd & Eddy', description: 'Caricatura de los 3 amigos más famosos de CN'},
      {id: 5, title: 'Batman', description: 'El super héroe más aclamado de los tiempos'},
    ]
  });
  expect(reducerResult).toHaveLength(2);
});

test('search results reducer return list equal to an array expected', () => {
  const expected = [
    {id: 1, title: 'Carlos V', description: 'El mejor chocolate de México'},
    {id: 3, title: 'Carlos Alberto', description: 'El chico con nombre de telenovela'}
  ];
  const reducerResult = searchResults([{id: 0, title: 'El día después de mañana', description: 'Caos total después de una era de hielo.'},], {
    type: 'searchItems',
    payload: 'Carlos',
    source: [
      {id: 1, title: 'Carlos V', description: 'El mejor chocolate de México'},
      {id: 2, title: 'El chavo del 8', description: 'La serie más memorable de Chespirito'},
      {id: 3, title: 'Carlos Alberto', description: 'El chico con nombre de telenovela'},
      {id: 4, title: 'Ed, Edd & Eddy', description: 'Caricatura de los 3 amigos más famosos de CN'},
      {id: 5, title: 'Batman', description: 'El super héroe más aclamado de los tiempos'},
    ]
  });
  expect(reducerResult).toEqual(expected);
});


test('verify header', () => {
  const testRenderer = TestRenderer.create(<BrowserRouter><Header /></BrowserRouter>);
  const testInstance = testRenderer.root;
  const tree = testRenderer.toJSON();
  expect(tree).toMatchSnapshot();
  expect(testInstance.findByType(Header)).toBeTruthy();
})