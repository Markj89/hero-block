/**
 * BLOCK: hero-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

// Import JS
import {
	RichText,
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	ColorPicker,
	PanelBody,
	PanelRow,
	TextControl,
} from '@wordpress/components';
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { Fragment } = wp.element;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-hero-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Bootstrap Hero Block' ),
	icon: 'shield',
	category: 'design', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Bootstrap Hero Block' ),
		__( 'Hero Block Example' ),
		__( 'create-guten-block' ),
	],
	attributes: {
		color: {
			type: 'object',
		},
		alignment: {
			type: 'string',
			default: 'none',
		},
		headline: {
			type: 'array',
			source: 'children',
			selector: 'h1',
		},
		subline: {
			type: 'array',
			source: 'children',
			selector: 'h2',
		},
		content: {
			type: 'array',
			source: 'children',
			selector: '.content',
		},
		className: {
			type: 'string',
		},
		headlineClass: {
			type: 'string',
		},
		sublineClass: {
			type: 'string',
		},
		contentClass: {
			type: 'string',
		},
	},
	example: {
		attributes: {
			alignment: 'left',
			headline: __( 'Hello World' ),
			subline: __( 'This is a subline' ),
			content: __(
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tellus turpis, convallis vel sapien in, pharetra sodales lacus. Ut suscipit nunc a tempus gravida.'
			),
		},
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( props ) => {
		const {
			attributes,
			color,
			alignment,
			headline,
			subline,
			content,
			headlineClass,
			sublineClass,
			contentClass,
			setAttributes,
		} = props;

		function onChangeContent( newContent ) {
			setAttributes( { content: newContent } );
		}

		function onChangeAlignment( newAlignment ) {
			setAttributes( {
				alignment: newAlignment === undefined ? 'none' : newAlignment,
			} );
		}

		function onChangeHeadline( newHeadline ) {
			setAttributes( { headline: newHeadline } );
		}

		function onChangeSubline( newSubline ) {
			setAttributes( { subline: newSubline } );
		}

		function onChangeHeadlineClass( newValue ) {
			setAttributes( { headlineClass: newValue } );
		}

		function onChangeSublineClass( newValue ) {
			setAttributes( { sublineClass: newValue } );
		}

		function onChangeContentClass( newValue ) {
			setAttributes( { contentClass: newValue } );
		}
		const alignmentClass =
			attributes.alignment !== null ?
				'has-text-align-' + attributes.alignment :
				'';

		return (
			<div className={ alignmentClass }>
				<InspectorControls>
					<Fragment>
						<PanelBody
							title={ __( 'Color Picker', 'test' ) }
							initialOpen={ true }
						>
							<PanelRow>
								<ColorPicker
									color={ color }
									onChangeComplete={ ( value ) =>
										setAttributes( { color: value.hex } )
									}
									disableAlpha
								/>
							</PanelRow>
						</PanelBody>
						<PanelBody
							title={ __( 'Classes', 'test' ) }
							initialOpen={ true }
						>
							<PanelRow>
								<TextControl
									label="Headline Classes"
									help="Additional classes to singular elements"
									value={ headlineClass }
									onChange={ onChangeHeadlineClass }
								/>
							</PanelRow>
							<PanelRow>
								<TextControl
									label="Subline Classes"
									help="Additional classes to singular elements"
									value={ sublineClass }
									onChange={ onChangeSublineClass }
								/>
							</PanelRow>
							<PanelRow>
								<TextControl
									label="Content Classes"
									help="Additional classes to singular elements"
									value={ contentClass }
									onChange={ onChangeContentClass }
								/>
							</PanelRow>
						</PanelBody>
					</Fragment>
				</InspectorControls>
				<BlockControls>
					<AlignmentToolbar
						value={ alignment }
						onChange={ onChangeAlignment }
					/>
				</BlockControls>
				<RichText
					tagName="h1"
					className={ headlineClass }
					style={ { textAlign: alignment } }
					placeholder="This is a headline"
					value={ headline }
					onChange={ onChangeHeadline }
					keepPlaceholderOnFocus={ true }
				/>
				<RichText
					tagName="h2"
					className={ sublineClass }
					style={ { textAlign: alignment } }
					placeholder="This is a subline"
					value={ subline }
					onChange={ onChangeSubline }
					keepPlaceholderOnFocus={ true }
				/>
				<RichText
					tagName="p"
					className={ contentClass }
					placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nulla feugiat urna nec urna tempor, vestibulum ultrices massa facilisis. Quisque sodales ex sit amet hendrerit varius.
					Fusce non est a arcu fermentum blandit id nec libero.
					Suspendisse tincidunt massa id purus viverra, vel ultricies augue lobortis.
					Maecenas sit amet tempor ex. Curabitur eget suscipit nulla, in tempus lorem. Maecenas tempus augue ac enim egestas consectetur."
					style={ { textAlign: alignment } }
					value={ content }
					onChange={ onChangeContent }
					keepPlaceholderOnFocus={ true }
				/>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => {
		const { attributes } = props;
		const alignmentClass =
			attributes.alignment !== null ?
				'has-text-align-' + attributes.alignment :
				'';
		const heroClass =
			attributes.className !== null ?
				'jumbotron jumbotron-fluid ' + attributes.className :
				'';
		return (
			<div
				className={ heroClass }
				style={ { backgroundColor: attributes.color } }
			>
				<div className="container">
					<div className={ alignmentClass }>
						<RichText.Content
							tagName="h1"
							value={ attributes.headline }
							className={
								attributes.headlineClass !== null ?
									attributes.headlineClass :
									''
							}
						/>
						<RichText.Content
							tagName="h2"
							value={ attributes.subline }
							className={
								attributes.sublineClass !== null ?
									attributes.sublineClass :
									''
							}
						/>
						<RichText.Content
							tagName="p"
							value={ attributes.content }
							className={
								attributes.contentClass !== null ?
									attributes.contentClass :
									''
							}
						/>
					</div>
				</div>
			</div>
		);
	},
} );
