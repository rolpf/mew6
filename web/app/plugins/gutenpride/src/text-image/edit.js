import { __ } from '@wordpress/i18n';
import {
	PlainText,MediaUpload, MediaPlaceholder, MediaUploadCheck, InspectorControls,
	useBlockProps, RichText, URLInputButton } from '@wordpress/block-editor';
import { BaseControl, Button } from '@wordpress/components';
import './editor.scss';

const ALLOWED_MEDIA_TYPES = ['image'];

export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();
	return (
		<div>
			<PlainText
				className={"block-editor-text-image-title"}
				placeholder={__('Title')}
				value={attributes?.title}
				onChange={(title) => {
					setAttributes({ title })
				}}
			/>
			<PlainText
				className={"block-editor-text-image-subtitle2"}
				placeholder={__('Sous-titre')}
				value={attributes?.subtitle2}
				onChange={(subtitle2) => {
					setAttributes({ subtitle2 })
				}}
			/>
			<PlainText
				className={"block-editor-text-image-subtitle"}
				placeholder={__('Sous-titre')}
				value={attributes?.subtitle}
				onChange={(subtitle) => {
					setAttributes({ subtitle })
				}}
			/>
			<URLInputButton
				url={attributes?.link}
				onChange={ (link) => { setAttributes({link}) } }
			/>
			{/* <RichText
			  { ...blockProps }
				tagName="p"
				value={ attributes?.text }
				placeholder={ __( 'Description du document à télécharger') }
				onChange={ text => setAttributes( { text } ) }
			/> */}
			{attributes?.imageUrl ? (
				<img src={attributes?.imageUrl} alt="" />
 			) : (
				<MediaPlaceholder
					onSelect={(media) => setAttributes({ imageUrl: media.url, imageId: media.id })}
					allowedTypes={['image']}
					multiple={false}
					labels={{ title: __('The Image') }}
				/>
			)}
			<InspectorControls>
				<BaseControl>
				<MediaPlaceholder
					onSelect={(media) => setAttributes({ imageUrl: media.url, imageId: media.id })}
					allowedTypes={['image']}
					multiple={false}
					labels={{ title: __('The Image') }}
				/>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => setAttributes({ imageUrl: media.url, imageId: media.id })}
							allowedTypes={ ALLOWED_MEDIA_TYPES }
							value={ attributes?.imageId }
							render={ ( { open } ) => (
								<Button onClick={ open }>{__('Replace the image')}</Button>
							) }
						/>
					</MediaUploadCheck>
				</BaseControl>
			</InspectorControls>
		
		</div>
	);
}
