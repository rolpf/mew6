import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();
	return (
		<div style={`--bg-url: url(${attributes?.imageUrl})`}>
			<InnerBlocks.Content />
			<div class="partie1">
			<div class="container">
			<h1>{attributes?.title}</h1>
			<p>{attributes?.subtitle}</p>
			<button>Try For Free</button>
		</div></div></div>	
	);
}
