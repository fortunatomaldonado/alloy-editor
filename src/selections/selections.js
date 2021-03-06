import SelectionGetArrowBoxClasses from './selection-arrowbox.js';
import SelectionSetPosition from './selection-position.js';
import SelectionTest from './selection-test.js';

const Selections = [
	{
		name: 'embed',
		buttons: ['embedRemove', 'embedEdit'],
		test: SelectionTest.embed,
	},
	{
		name: 'embedUrl',
		buttons: ['embedVideo', 'embedVideoEdit'],
		test: SelectionTest.embedUrl,
	},
	{
		name: 'link',
		buttons: ['linkEdit'],
		test: SelectionTest.link,
	},
	{
		name: 'image',
		buttons: [
			'imageLeft',
			'imageCenter',
			'imageRight',
			'AccessibilityImageAlt',
		],
		setPosition: SelectionSetPosition.image,
		test: SelectionTest.image,
	},
	{
		name: 'text',
		buttons: {
			full: [
				[
					'Font',
					'FontSize',
					'separator',
					'bold',
					'italic',
					'underline',
					'strike',
					'separator',
					'link',
				],
				[
					'paragraphAlign',
					'separator',
					'ul',
					'ol',
					'separator',
					'h1',
					'h2',
					'separator',
					'indentBlock',
					'outdentBlock',
					'separator',
					'TextColor',
					'BGColor',
					'separator',
					'code',
					'quote',
					'separator',
					'removeFormat',
				],
			],

			simple: ['styles', 'bold', 'italic', 'underline', 'link'],
		},
		test: SelectionTest.text,
	},
	{
		name: 'table',
		buttons: [
			'tableHeading',
			'tableRow',
			'tableColumn',
			'tableCell',
			'tableRemove',
		],
		getArrowBoxClasses: SelectionGetArrowBoxClasses.table,
		setPosition: SelectionSetPosition.table,
		test: SelectionTest.table,
	},
];

export default Selections;
