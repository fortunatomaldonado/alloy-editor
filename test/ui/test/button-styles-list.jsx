import ButtonStylesList from '../../../src/components/buttons/button-styles-list.jsx';
import ButtonStylesListItemRemove from '../../../src/components/buttons/button-styles-list-item-remove.jsx';

var assert = chai.assert;
var TestUtils = ReactTestUtils;

describe('ButtonStylesList', function() {
	before(Utils.createAlloyEditor);

	after(Utils.destroyAlloyEditor);

	beforeEach(Utils.beforeEach);

	afterEach(Utils.afterEach);

	it('should render remove styles button by default', function() {
		var styles = [
			{
				name: AlloyEditor.Strings.h1,
				style: {
					element: 'h1',
				},
			},
		];

		var buttonStylesList = ReactDOM.render(
			<ButtonStylesList
				toggleDropdown={sinon.stub()}
				editor={this.editor}
				styles={styles}
			/>,
			this.container
		);

		assert.isObject(
			TestUtils.findRenderedComponentWithType(
				buttonStylesList,
				ButtonStylesListItemRemove
			)
		);
	});

	it('should prevent rendering of remove styles button', function() {
		var styles = [
			{
				name: AlloyEditor.Strings.h1,
				style: {
					element: 'h1',
				},
			},
		];

		var buttonStylesList = ReactDOM.render(
			<ButtonStylesList
				editor={this.editor}
				showRemoveStylesItem={false}
				styles={styles}
			/>,
			this.container
		);

		assert.throws(function() {
			TestUtils.findRenderedComponentWithType(
				buttonStylesList,
				ButtonStylesListItemRemove
			);
		});
	});
});
