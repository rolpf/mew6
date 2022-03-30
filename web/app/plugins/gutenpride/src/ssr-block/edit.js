import { __ } from '@wordpress/i18n';
import { PlainText, useBlockProps, InspectorControls, BaseControl, MediaPlaceholder, MediaUploadCheck, MediaUpload } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const ALLOWED_MEDIA_TYPES= [""];
	return (
		<div { ...useBlockProps() }>
			<PlainText
				keepplaceholderonfocus='true'
				placeholder={__('Title')}
				value={attributes?.title}
				onChange={(newTitle) => {
					setAttributes({ title: newTitle })
				}}
			/>
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
