import { Column, Board, TextCard, TextElement, Tag } from './base';

const tag = new Tag('tag1');
const el = new TextElement('Element1');
const card = new TextCard('Title', 'Description', [tag], [el]);
const list = new Column('ToDo', [card]);
const board = new Board('New board', [list]);

console.log(board.toString());