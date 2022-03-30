import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();
	return (
		<div>
			<InnerBlocks.Content />
		<div class="partie3">

		<div class="container">
			  <h1>{attributes?.title}</h1>
			  <p>On mobile, computer, tablet... Choose how you listen.</p>
			  <button>DOWNLOAD OUR APP</button>
		  	<img src={attributes?.imageUrl}></img>
		</div>
	</div>
</div>
	);
}
