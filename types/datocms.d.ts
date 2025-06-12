type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BooleanType: { input: any; output: any; }
  CustomData: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  FloatType: { input: any; output: any; }
  IntType: { input: any; output: any; }
  ItemId: { input: any; output: any; }
  JsonField: { input: any; output: any; }
  MetaTagAttributes: { input: any; output: any; }
  UploadId: { input: any; output: any; }
};

/** Record of type About (about) */
type AboutRecord = RecordInterface & {
  __typename?: 'AboutRecord';
  _allFooterLocales?: Maybe<Array<FooterRecordNonNullMultiLocaleField>>;
  _allSectionsLocales?: Maybe<Array<SectionRecordListListNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  footer: FooterRecord;
  header: HeaderRecord;
  id: Scalars['ItemId']['output'];
  sections: Array<SectionRecord>;
  seoMeta: SeoRecord;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type About (about) */
type AboutRecord_allFooterLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type About (about) */
type AboutRecord_allSectionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type About (about) */
type AboutRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type About (about) */
type AboutRecordfooterArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type About (about) */
type AboutRecordsectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Boolean fields */
type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Block of type Button (button) */
type ButtonRecord = RecordInterface & {
  __typename?: 'ButtonRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  text?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


/** Block of type Button (button) */
type ButtonRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ClientModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ClientModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ClientModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  logo?: InputMaybe<FileFilter>;
  name?: InputMaybe<StringFilter>;
};

enum ClientModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC'
}

/** Record of type Client (client) */
type ClientRecord = RecordInterface & {
  __typename?: 'ClientRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  logo?: Maybe<FileField>;
  name?: Maybe<Scalars['String']['output']>;
};


/** Record of type Client (client) */
type ClientRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type CollectionMetadata = {
  __typename?: 'CollectionMetadata';
  count: Scalars['IntType']['output'];
};

enum ColorBucketType {
  black = 'black',
  blue = 'blue',
  brown = 'brown',
  cyan = 'cyan',
  green = 'green',
  grey = 'grey',
  orange = 'orange',
  pink = 'pink',
  purple = 'purple',
  red = 'red',
  white = 'white',
  yellow = 'yellow'
}

type ColorField = {
  __typename?: 'ColorField';
  alpha: Scalars['IntType']['output'];
  blue: Scalars['IntType']['output'];
  cssRgb: Scalars['String']['output'];
  green: Scalars['IntType']['output'];
  hex: Scalars['String']['output'];
  red: Scalars['IntType']['output'];
};

/** Record of type Contact (contact) */
type ContactRecord = RecordInterface & {
  __typename?: 'ContactRecord';
  _allFooterLocales?: Maybe<Array<FooterRecordNonNullMultiLocaleField>>;
  _allSectionsLocales?: Maybe<Array<SectionRecordListListNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  footer: FooterRecord;
  header: HeaderRecord;
  id: Scalars['ItemId']['output'];
  sections: Array<SectionRecord>;
  seoMeta: SeoRecord;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type Contact (contact) */
type ContactRecord_allFooterLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Contact (contact) */
type ContactRecord_allSectionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Contact (contact) */
type ContactRecord_allTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Contact (contact) */
type ContactRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Contact (contact) */
type ContactRecordfooterArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Contact (contact) */
type ContactRecordsectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Contact (contact) */
type ContactRecordtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by creation datetime */
type CreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

type ExpandableListItemModelTextField = {
  __typename?: 'ExpandableListItemModelTextField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type Expandable list item (expandable_list_item) */
type ExpandableListItemRecord = RecordInterface & {
  __typename?: 'ExpandableListItemRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  text?: Maybe<ExpandableListItemModelTextField>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Block of type Expandable list item (expandable_list_item) */
type ExpandableListItemRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Expandable list (expandable_list) */
type ExpandableListRecord = RecordInterface & {
  __typename?: 'ExpandableListRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  items: Array<ExpandableListItemRecord>;
};


/** Block of type Expandable list (expandable_list) */
type ExpandableListRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

enum FaviconType {
  appleTouchIcon = 'appleTouchIcon',
  icon = 'icon',
  msApplication = 'msApplication'
}

type FileField = FileFieldInterface & {
  __typename?: 'FileField';
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<focalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
};


type FileFieldaltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


type FileFieldcustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldfocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldresponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


type FileFieldtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldurlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

type FileFieldInterface = {
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<focalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
};


type FileFieldInterfacealtArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfaceblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


type FileFieldInterfacecustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfacefocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfaceresponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


type FileFieldInterfacetitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfaceurlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

/** Specifies how to filter Single-file/image fields */
type FileFilter = {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that have one of the specified uploads */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Filter records that do not have one of the specified uploads */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

type FooterModelHeadlineField = {
  __typename?: 'FooterModelHeadlineField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type FooterModelLinkField = AboutRecord | ContactRecord;

type FooterModelTextField = {
  __typename?: 'FooterModelTextField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type Footer (footer) */
type FooterRecord = RecordInterface & {
  __typename?: 'FooterRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  buttonText?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<FooterModelHeadlineField>;
  id: Scalars['ItemId']['output'];
  link?: Maybe<FooterModelLinkField>;
  text?: Maybe<FooterModelTextField>;
};


/** Block of type Footer (footer) */
type FooterRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type FooterRecordMultiLocaleField = {
  __typename?: 'FooterRecordMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<FooterRecord>;
};

type FooterRecordNonNullMultiLocaleField = {
  __typename?: 'FooterRecordNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: FooterRecord;
};

type GlobalSeoField = {
  __typename?: 'GlobalSeoField';
  facebookPageUrl?: Maybe<Scalars['String']['output']>;
  fallbackSeo?: Maybe<SeoField>;
  siteName?: Maybe<Scalars['String']['output']>;
  titleSuffix?: Maybe<Scalars['String']['output']>;
  twitterAccount?: Maybe<Scalars['String']['output']>;
};

type HeaderImageModelHeadlineField = {
  __typename?: 'HeaderImageModelHeadlineField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type HeaderImageModelTextField = {
  __typename?: 'HeaderImageModelTextField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type Header with Images (header_image) */
type HeaderImageRecord = RecordInterface & {
  __typename?: 'HeaderImageRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  align: Scalars['String']['output'];
  headline?: Maybe<HeaderImageModelHeadlineField>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  images: Array<FileField>;
  text?: Maybe<HeaderImageModelTextField>;
};


/** Block of type Header with Images (header_image) */
type HeaderImageRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type HeaderModelHeadlineField = {
  __typename?: 'HeaderModelHeadlineField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type HeaderModelTextField = {
  __typename?: 'HeaderModelTextField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type Header (header) */
type HeaderRecord = RecordInterface & {
  __typename?: 'HeaderRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  align: Scalars['String']['output'];
  headline?: Maybe<HeaderModelHeadlineField>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  text?: Maybe<HeaderModelTextField>;
};


/** Block of type Header (header) */
type HeaderRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type HeaderRecordNonNullMultiLocaleField = {
  __typename?: 'HeaderRecordNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: HeaderRecord;
};

/** Block of type Image(s) (image_gallery) */
type ImageGalleryRecord = RecordInterface & {
  __typename?: 'ImageGalleryRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  images: Array<FileField>;
};


/** Block of type Image(s) (image_gallery) */
type ImageGalleryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/aspect-ratio)
   */
  ar?: InputMaybe<Scalars['String']['input']>;
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/automatic)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>;
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/background-color)
   */
  bg?: InputMaybe<Scalars['String']['input']>;
  /**
   * Background Removal
   *
   * Removes background from image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal)
   */
  bgRemove?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Removal Fallback
   *
   * Overrides default fallback behavior for bg-remove failures.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-fallback)
   */
  bgRemoveFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Removal Foreground Type
   *
   * Specifies the image foreground type for background removal.
   *
   * Depends on: `bg-remove=true`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-foreground-type)
   */
  bgRemoveFgType?: InputMaybe<Array<ImgixParamsBgRemoveFgType>>;
  /**
   * Background Removal Semi Transparency
   *
   * Enables background removal while retaining semi-transparent areas.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-semi-transparency)
   */
  bgRemoveSemiTransparency?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Replacement
   *
   * Replaces background from image using a string based prompt.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replacement)
   */
  bgReplace?: InputMaybe<Scalars['String']['input']>;
  /**
   * Background Replace Fallback
   *
   * Overrides default fallback behavior for bg-replace failures.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replace-fallback)
   */
  bgReplaceFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Replacement Negative Prompt
   *
   * Provides a negative text suggestion for background replacement.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replacement-negative-prompt)
   */
  bgReplaceNegPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend)
   */
  blend?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>;
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>;
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>;
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-height)
   */
  blendH?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>;
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-padding)
   */
  blendPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>;
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-width)
   */
  blendW?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-x-position)
   */
  blendX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-y-position)
   */
  blendY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/gaussian-blur)
   */
  blur?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size)
   */
  border?: InputMaybe<Scalars['String']['input']>;
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/outer-border-radius)
   */
  borderRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/inner-border-radius)
   */
  borderRadiusInner?: InputMaybe<Scalars['String']['input']>;
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/brightness)
   */
  bri?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/client-hints)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>;
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/chroma-subsampling)
   */
  chromasub?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/color-quantization)
   */
  colorquant?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/palette-color-count)
   */
  colors?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/contrast)
   */
  con?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/crop-mode)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>;
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/color-space)
   */
  cs?: InputMaybe<ImgixParamsCs>;
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/download)
   */
  dl?: InputMaybe<Scalars['String']['input']>;
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/dots-per-inch)
   */
  dpi?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/device-pixel-ratio)
   */
  dpr?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars['String']['input']>;
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/exposure)
   */
  exp?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/expiration)
   */
  expires?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Blur
   *
   * Specifies the amount of blur to apply to detected faces. Defaults to 0.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-blur)
   */
  faceBlur?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Pixelation
   *
   * Specifies the pixelation amount of the face.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-pixelation)
   */
  facePixel?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-index)
   */
  faceindex?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-padding)
   */
  facepad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/json-face-data)
   */
  faces?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-mode)
   */
  fill?: InputMaybe<ImgixParamsFill>;
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Generative Fallback
   *
   * Sets the fallback behavior for generative fill.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-fallback)
   */
  fillGenFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Fill Generative Negative Prompt
   *
   * Provides a negative text suggestion to the generative fill parameter. Used to reduce the probability of a subject, detail, or object appearing in generative output.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-negative-prompt)
   */
  fillGenNegPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Generative Position
   *
   * Sets the position of the Origin Image in relation to the generative fill.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-position)
   */
  fillGenPos?: InputMaybe<Array<ImgixParamsFillGenPos>>;
  /**
   * Fill Generative Prompt
   *
   * Provides a text suggestion to the generative fill parameter.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-prompt)
   */
  fillGenPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Generative Seed
   *
   * Sets the generative seed value. Used to generate similar outputs from different prompts.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-seed)
   */
  fillGenSeed?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Fill Gradient Color Space
   *
   * Defines the color space as linear, sRGB, Oklab, HSL, or LCH for gradient color interpolation
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-color-space)
   */
  fillGradientCs?: InputMaybe<ImgixParamsFillGradientCs>;
  /**
   * Fill Gradient Linear
   *
   * Blends a gradient between two colors, {color1} and {color2}, along a straight path
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-linear)
   */
  fillGradientLinear?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Gradient Linear Direction
   *
   * The fill-gradient-linear-direction specifies the gradient's direction, flowing towards the bottom, top, right, or left
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-linear-direction)
   */
  fillGradientLinearDirection?: InputMaybe<Array<ImgixParamsFillGradientLinearDirection>>;
  /**
   * Fill Gradient Radial
   *
   * The fill-gradient-radial parameter creates a circular gradient transitioning from a central color (Color1) to an outer color (Color2)
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial)
   */
  fillGradientRadial?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Gradient Radial Radius
   *
   * Parameter defines the radial gradient's radius as pixels or a percentage (0.0-1.0) of the image's smallest dimension
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-radius)
   */
  fillGradientRadialRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Gradient Radial X
   *
   * Specifies the location of the radial gradient's center along the x-axis, using either a pixel value or a floating point percentage (ranging from 0.0 to 1.0) of the image's width
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-x)
   */
  fillGradientRadialX?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Fill Gradient Radial Y
   *
   * Parameter sets the radial gradient's center on the y-axis, using pixels or a 0.0 to 1.0 percentage of the image's height
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-y)
   */
  fillGradientRadialY?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Fill Gradient Type
   *
   * Specifies if a gradient is radial (circular) or linear (straight)
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-type)
   */
  fillGradientType?: InputMaybe<ImgixParamsFillGradientType>;
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/resize-fit-mode)
   */
  fit?: InputMaybe<ImgixParamsFit>;
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/flip-axis)
   */
  flip?: InputMaybe<ImgixParamsFlip>;
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/output-format)
   */
  fm?: InputMaybe<ImgixParamsFm>;
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-debug)
   */
  fpDebug?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-x-position)
   */
  fpX?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-y-position)
   */
  fpY?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-zoom)
   */
  fpZ?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Frames Per Second
   *
   * Specifies the framerate of the generated image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frames-per-second)
   */
  fps?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Frame Selection
   *
   * Specifies the frame of an animated image to use.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-selection)
   */
  frame?: InputMaybe<Scalars['String']['input']>;
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/gamma)
   */
  gam?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Animated Gif Quality
   *
   * Specifies the quality of the animated gif. The higher the value, the better more compression is applied.
   *
   * Depends on: `fm=gif`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/animated-gif-quality)
   */
  gifQ?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/grid-colors)
   */
  gridColors?: InputMaybe<Scalars['String']['input']>;
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/grid-size)
   */
  gridSize?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/image-height)
   */
  h?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/highlight)
   */
  high?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/halftone)
   */
  htn?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/hue-shift)
   */
  hue?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Frame Interval
   *
   * Displays every Nth frame starting with the first frame.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-interval)
   */
  interval?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/invert)
   */
  invert?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/iptc-passthrough)
   */
  iptc?: InputMaybe<ImgixParamsIptc>;
  /**
   * Jpg Progressive
   *
   * Specifies whether or not a jpg/jpeg uses progressive (true) or baseline (false)
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/jpg-progressive)
   */
  jpgProgressive?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Animation Loop Count
   *
   * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation)
   */
  loop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/lossless-compression)
   */
  lossless?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * License Plate Blur
   *
   * Specifies the amount of blur to apply to detected license plates. Defaults to 0.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/license-plate-detection/license-plate-blur)
   */
  lpBlur?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-image-url)
   */
  mark?: InputMaybe<Scalars['String']['input']>;
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-alignment-mode)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>;
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-alpha)
   */
  markAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-base-url)
   */
  markBase?: InputMaybe<Scalars['String']['input']>;
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-fit-mode)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>;
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-height)
   */
  markH?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark If Minimum Height
   *
   * Displays the watermark if rendered base image pixel height is equal to or larger than the supplied value
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-if-minimum-height)
   */
  markIfMinHeight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark If Minimum Width
   *
   * Displays the watermark if rendered base image pixel width is equal to or larger than the supplied value
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-if-minimum-width)
   */
  markIfMinWidth?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-padding)
   */
  markPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-rotation)
   */
  markRot?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-scale)
   */
  markScale?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>;
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-width)
   */
  markW?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-x-position)
   */
  markX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-y-position)
   */
  markY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-type)
   */
  mask?: InputMaybe<Scalars['String']['input']>;
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-background-color)
   */
  maskBg?: InputMaybe<Scalars['String']['input']>;
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/maximum-height)
   */
  maxH?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/maximum-width)
   */
  maxW?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/minimum-height)
   */
  minH?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/minimum-width)
   */
  minW?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars['String']['input']>;
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/noise-reduction/noise-reduction-bound)
   */
  nr?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/noise-reduction/noise-reduction-sharpen)
   */
  nrs?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Object Removal Negative Prompt
   *
   * Provides a negative text suggestion to object-removal-prompt. Used to reduce the probability of a subject, detail, or object appearing in generative output.
   *
   * Depends on: `object-removal-rect`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-negative-prompt)
   */
  objectRemovalNegativePrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Object Removal Prompt
   *
   * Suggest auto generative fill for the object-removal-rect parameter
   *
   * Depends on: `object-removal-rect`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-prompt)
   */
  objectRemovalPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Object Removal
   *
   * Using a specified rectangle, an object is removed from the image
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal)
   */
  objectRemovalRect?: InputMaybe<Scalars['String']['input']>;
  /**
   * Object Removal Seed
   *
   * Sets the generative seed value for object-removal. Used to generate new outputs from the same prompt
   *
   * Depends on: `object-removal-rect`, `object-removal-prompt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-seed)
   */
  objectRemovalSeed?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/orientation)
   */
  orient?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding)
   */
  pad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-bottom)
   */
  padBottom?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-left)
   */
  padLeft?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-right)
   */
  padRight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-top)
   */
  padTop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/pdf/pdf-page-number)
   */
  page?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/color-palette-extraction)
   */
  palette?: InputMaybe<ImgixParamsPalette>;
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/css-prefix)
   */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/pixellate)
   */
  px?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=avif`, `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/output-quality)
   */
  q?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Rasterize Bypass
   *
   * Bypasses all rendering parameters (including default parameters) and serves the original image. Works for svg+xml,x-eps,pdf, and vnd.adobe.illustrator.
   */
  rasterizeBypass?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/source-rectangle-region)
   */
  rect?: InputMaybe<Scalars['String']['input']>;
  /**
   * Reverse
   *
   * Reverses the frame order on the source animation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/reverse)
   */
  reverse?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/rotation)
   */
  rot?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Rotation Type
   *
   * Changes the rotation type.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/rotation-type)
   */
  rotType?: InputMaybe<ImgixParamsRotType>;
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/saturation)
   */
  sat?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/sepia-tone)
   */
  sepia?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/shadow)
   */
  shad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/sharpen)
   */
  sharp?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Frame Skip
   *
   * Skips every Nth frame starting with the first frame.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-skip)
   */
  skip?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Bypasses any [DatoCMS Automatic Image Optimization](https://www.datocms.com/docs/cdn-settings/advanced-asset-settings) that might be set up for the project.
   *
   * Exercise caution when using this parameter, as it could significantly increase your bandwidth costs.
   */
  skipDefaultOptimizations?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Sanitize Svg
   *
   * Specifies whether to sanitize an SVG.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/sanitize-svg)
   */
  svgSanitize?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>;
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-image)
   */
  trim?: InputMaybe<ImgixParamsTrim>;
  /**
   * Trim Alpha
   *
   * Specifies a trim alpha on a trim operation.
   *
   * Depends on: `trim=alpha`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-alpha)
   */
  trimAlpha?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-mean-difference)
   */
  trimMd?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-padding)
   */
  trimPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-standard-deviation)
   */
  trimSd?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-tolerance)
   */
  trimTol?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-string)
   */
  txt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>;
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-clipping-mode)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>;
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-color)
   */
  txtColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-fit-mode)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>;
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-font)
   */
  txtFont?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/typesetting-endpoint/text-leading)
   */
  txtLead?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-outline)
   */
  txtLine?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-outline-color)
   */
  txtLineColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-padding)
   */
  txtPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-shadow)
   */
  txtShad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-font-size)
   */
  txtSize?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/typesetting-endpoint/text-tracking)
   */
  txtTrack?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-width)
   */
  txtWidth?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-x-position)
   */
  txtX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-y-position)
   */
  txtY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Super Resolution
   *
   * Uses generative AI fill to upscale low resolution images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution)
   */
  upscale?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Super Resolution Fallback
   *
   * Overrides default fallback behavior for super resolution failures
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution)
   */
  upscaleFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/unsharp-mask)
   */
  usm?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/unsharp-mask-radius)
   */
  usmrad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/vibrance)
   */
  vib?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/image-width)
   */
  w?: InputMaybe<Scalars['FloatType']['input']>;
};

enum ImgixParamsAuto {
  compress = 'compress',
  enhance = 'enhance',
  format = 'format',
  redeye = 'redeye'
}

enum ImgixParamsBgRemoveFgType {
  auto = 'auto',
  car = 'car'
}

enum ImgixParamsBlendAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsBlendCrop {
  bottom = 'bottom',
  faces = 'faces',
  left = 'left',
  right = 'right',
  top = 'top'
}

enum ImgixParamsBlendFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  max = 'max',
  scale = 'scale'
}

enum ImgixParamsBlendMode {
  burn = 'burn',
  color = 'color',
  darken = 'darken',
  difference = 'difference',
  dodge = 'dodge',
  exclusion = 'exclusion',
  hardlight = 'hardlight',
  hue = 'hue',
  lighten = 'lighten',
  luminosity = 'luminosity',
  multiply = 'multiply',
  normal = 'normal',
  overlay = 'overlay',
  saturation = 'saturation',
  screen = 'screen',
  softlight = 'softlight'
}

enum ImgixParamsBlendSize {
  inherit = 'inherit'
}

enum ImgixParamsCh {
  dpr = 'dpr',
  saveData = 'saveData',
  width = 'width'
}

enum ImgixParamsCrop {
  bottom = 'bottom',
  edges = 'edges',
  entropy = 'entropy',
  faces = 'faces',
  focalpoint = 'focalpoint',
  left = 'left',
  right = 'right',
  top = 'top'
}

enum ImgixParamsCs {
  adobergb1998 = 'adobergb1998',
  origin = 'origin',
  srgb = 'srgb',
  strip = 'strip',
  tinysrgb = 'tinysrgb'
}

enum ImgixParamsFill {
  blur = 'blur',
  gen = 'gen',
  generative = 'generative',
  gradient = 'gradient',
  solid = 'solid'
}

enum ImgixParamsFillGenPos {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsFillGradientCs {
  hsl = 'hsl',
  lch = 'lch',
  linear = 'linear',
  oklab = 'oklab',
  srgb = 'srgb'
}

enum ImgixParamsFillGradientLinearDirection {
  bottom = 'bottom',
  left = 'left',
  right = 'right',
  top = 'top'
}

enum ImgixParamsFillGradientType {
  linear = 'linear',
  radial = 'radial'
}

enum ImgixParamsFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  facearea = 'facearea',
  fill = 'fill',
  fillmax = 'fillmax',
  max = 'max',
  min = 'min',
  scale = 'scale'
}

enum ImgixParamsFlip {
  h = 'h',
  hv = 'hv',
  v = 'v'
}

enum ImgixParamsFm {
  avif = 'avif',
  blurhash = 'blurhash',
  gif = 'gif',
  jp2 = 'jp2',
  jpg = 'jpg',
  json = 'json',
  jxr = 'jxr',
  mp4 = 'mp4',
  pjpg = 'pjpg',
  png = 'png',
  png8 = 'png8',
  png32 = 'png32',
  webm = 'webm',
  webp = 'webp'
}

enum ImgixParamsIptc {
  allow = 'allow',
  block = 'block'
}

enum ImgixParamsMarkAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsMarkFit {
  clip = 'clip',
  crop = 'crop',
  fill = 'fill',
  max = 'max',
  scale = 'scale'
}

enum ImgixParamsMarkTile {
  grid = 'grid'
}

enum ImgixParamsPalette {
  css = 'css',
  json = 'json'
}

enum ImgixParamsRotType {
  pivot = 'pivot',
  straighten = 'straighten'
}

enum ImgixParamsTransparency {
  grid = 'grid'
}

enum ImgixParamsTrim {
  alpha = 'alpha',
  auto = 'auto',
  color = 'color'
}

enum ImgixParamsTxtAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsTxtClip {
  ellipsis = 'ellipsis',
  end = 'end',
  middle = 'middle',
  start = 'start'
}

enum ImgixParamsTxtFit {
  max = 'max'
}

/** Specifies how to filter by usage */
type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Specifies how to filter by ID */
type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

enum ItemStatus {
  draft = 'draft',
  published = 'published',
  updated = 'updated'
}

/** Record of type Join us (join) */
type JoinRecord = RecordInterface & {
  __typename?: 'JoinRecord';
  _allFooterLocales?: Maybe<Array<FooterRecordNonNullMultiLocaleField>>;
  _allHeaderLocales?: Maybe<Array<HeaderRecordNonNullMultiLocaleField>>;
  _allSectionsLocales?: Maybe<Array<SectionRecordListListNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  footer: FooterRecord;
  header: HeaderRecord;
  id: Scalars['ItemId']['output'];
  sections: Array<SectionRecord>;
  seoMeta: SeoRecord;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type Join us (join) */
type JoinRecord_allFooterLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Join us (join) */
type JoinRecord_allHeaderLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Join us (join) */
type JoinRecord_allSectionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Join us (join) */
type JoinRecord_allTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Join us (join) */
type JoinRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Join us (join) */
type JoinRecordfooterArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Join us (join) */
type JoinRecordheaderArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Join us (join) */
type JoinRecordsectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Join us (join) */
type JoinRecordtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Single-link fields */
type LinkFilter = {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records linked to one of the specified records */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Filter records not linked to one of the specified records */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

/** Specifies how to filter by locale */
type LocalesFilter = {
  /** Filter records that are localized in all the specified locales */
  allIn?: InputMaybe<Array<SiteLocale>>;
  /** Filter records that are localized in at least one of the specified locales */
  anyIn?: InputMaybe<Array<SiteLocale>>;
  /** Filter records that are not localized in any of the specified locales */
  notIn?: InputMaybe<Array<SiteLocale>>;
};

enum MuxThumbnailFormatType {
  gif = 'gif',
  jpg = 'jpg',
  png = 'png'
}

/** Block of type News (news) */
type NewsRecord = RecordInterface & {
  __typename?: 'NewsRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  text?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};


/** Block of type News (news) */
type NewsRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Offer (offer) */
type OfferRecord = RecordInterface & {
  __typename?: 'OfferRecord';
  _allFooterLocales?: Maybe<Array<FooterRecordNonNullMultiLocaleField>>;
  _allHeaderLocales?: Maybe<Array<HeaderRecordNonNullMultiLocaleField>>;
  _allSectionsLocales?: Maybe<Array<SectionRecordListListNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  footer: FooterRecord;
  header: HeaderRecord;
  id: Scalars['ItemId']['output'];
  sections: Array<SectionRecord>;
  seoMeta: SeoRecord;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type Offer (offer) */
type OfferRecord_allFooterLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Offer (offer) */
type OfferRecord_allHeaderLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Offer (offer) */
type OfferRecord_allSectionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Offer (offer) */
type OfferRecord_allTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Offer (offer) */
type OfferRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Offer (offer) */
type OfferRecordfooterArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Offer (offer) */
type OfferRecordheaderArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Offer (offer) */
type OfferRecordsectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Offer (offer) */
type OfferRecordtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by image orientation */
type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>;
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>;
};

/** Specifies how to filter by position (sorted and tree-like collections) */
type PositionFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Record of type Selected Projects Footer (project_footer) */
type ProjectFooterRecord = RecordInterface & {
  __typename?: 'ProjectFooterRecord';
  _allFooterLocales?: Maybe<Array<FooterRecordNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  footer: FooterRecord;
  id: Scalars['ItemId']['output'];
};


/** Record of type Selected Projects Footer (project_footer) */
type ProjectFooterRecord_allFooterLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Selected Projects Footer (project_footer) */
type ProjectFooterRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Selected Projects Footer (project_footer) */
type ProjectFooterRecordfooterArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type ProjectModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  client?: InputMaybe<LinkFilter>;
  headline?: InputMaybe<StructuredTextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  position?: InputMaybe<PositionFilter>;
  result?: InputMaybe<StructuredTextFilter>;
  slug?: InputMaybe<SlugFilter>;
  text?: InputMaybe<StructuredTextFilter>;
  thumbHeadline?: InputMaybe<StringFilter>;
  thumbText?: InputMaybe<StructuredTextFilter>;
  title?: InputMaybe<StringFilter>;
  what?: InputMaybe<StructuredTextFilter>;
  why?: InputMaybe<StructuredTextFilter>;
};

type ProjectModelHeadlineField = {
  __typename?: 'ProjectModelHeadlineField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type ProjectModelHeadlineFieldMultiLocaleField = {
  __typename?: 'ProjectModelHeadlineFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<ProjectModelHeadlineField>;
};

enum ProjectModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  thumbHeadline_ASC = 'thumbHeadline_ASC',
  thumbHeadline_DESC = 'thumbHeadline_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

type ProjectModelResultField = {
  __typename?: 'ProjectModelResultField';
  blocks: Array<ImageGalleryRecord>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type ProjectModelResultFieldMultiLocaleField = {
  __typename?: 'ProjectModelResultFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<ProjectModelResultField>;
};

type ProjectModelTextField = {
  __typename?: 'ProjectModelTextField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type ProjectModelTextFieldMultiLocaleField = {
  __typename?: 'ProjectModelTextFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<ProjectModelTextField>;
};

type ProjectModelThumbTextField = {
  __typename?: 'ProjectModelThumbTextField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type ProjectModelThumbTextFieldMultiLocaleField = {
  __typename?: 'ProjectModelThumbTextFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<ProjectModelThumbTextField>;
};

type ProjectModelWhatField = {
  __typename?: 'ProjectModelWhatField';
  blocks: Array<ImageGalleryRecord>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type ProjectModelWhatFieldMultiLocaleField = {
  __typename?: 'ProjectModelWhatFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<ProjectModelWhatField>;
};

type ProjectModelWhyField = {
  __typename?: 'ProjectModelWhyField';
  blocks: Array<ImageGalleryRecord>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type ProjectModelWhyFieldMultiLocaleField = {
  __typename?: 'ProjectModelWhyFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<ProjectModelWhyField>;
};

/** Record of type Project (project) */
type ProjectRecord = RecordInterface & {
  __typename?: 'ProjectRecord';
  _allHeadlineLocales?: Maybe<Array<ProjectModelHeadlineFieldMultiLocaleField>>;
  _allResultLocales?: Maybe<Array<ProjectModelResultFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTextLocales?: Maybe<Array<ProjectModelTextFieldMultiLocaleField>>;
  _allThumbHeadlineLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allThumbTextLocales?: Maybe<Array<ProjectModelThumbTextFieldMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allWhatLocales?: Maybe<Array<ProjectModelWhatFieldMultiLocaleField>>;
  _allWhyLocales?: Maybe<Array<ProjectModelWhyFieldMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  client?: Maybe<ClientRecord>;
  headline?: Maybe<ProjectModelHeadlineField>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  position?: Maybe<Scalars['IntType']['output']>;
  result?: Maybe<ProjectModelResultField>;
  slug: Scalars['String']['output'];
  text?: Maybe<ProjectModelTextField>;
  thumbHeadline?: Maybe<Scalars['String']['output']>;
  thumbText?: Maybe<ProjectModelThumbTextField>;
  title?: Maybe<Scalars['String']['output']>;
  what?: Maybe<ProjectModelWhatField>;
  why?: Maybe<ProjectModelWhyField>;
};


/** Record of type Project (project) */
type ProjectRecord_allHeadlineLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Project (project) */
type ProjectRecord_allResultLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Project (project) */
type ProjectRecord_allSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Project (project) */
type ProjectRecord_allTextLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Project (project) */
type ProjectRecord_allThumbHeadlineLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Project (project) */
type ProjectRecord_allThumbTextLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Project (project) */
type ProjectRecord_allTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Project (project) */
type ProjectRecord_allWhatLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Project (project) */
type ProjectRecord_allWhyLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Project (project) */
type ProjectRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Project (project) */
type ProjectRecordheadlineArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Project (project) */
type ProjectRecordresultArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Project (project) */
type ProjectRecordslugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Project (project) */
type ProjectRecordtextArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Project (project) */
type ProjectRecordthumbHeadlineArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Project (project) */
type ProjectRecordthumbTextArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Project (project) */
type ProjectRecordtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Project (project) */
type ProjectRecordwhatArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Project (project) */
type ProjectRecordwhyArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by publication datetime */
type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** The query root for this schema */
type Query = {
  __typename?: 'Query';
  /** Returns meta information regarding a record collection */
  _allClientsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProjectsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allStaffsMeta: CollectionMetadata;
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta: CollectionMetadata;
  /** Returns the single instance record */
  _site: Site;
  /** Returns the single instance record */
  about?: Maybe<AboutRecord>;
  /** Returns a collection of records */
  allClients: Array<ClientRecord>;
  /** Returns a collection of records */
  allProjects: Array<ProjectRecord>;
  /** Returns a collection of records */
  allStaffs: Array<StaffRecord>;
  /** Returns a collection of assets */
  allUploads: Array<FileField>;
  /** Returns a specific record */
  client?: Maybe<ClientRecord>;
  /** Returns the single instance record */
  contact?: Maybe<ContactRecord>;
  /** Returns the single instance record */
  join?: Maybe<JoinRecord>;
  /** Returns the single instance record */
  offer?: Maybe<OfferRecord>;
  /** Returns a specific record */
  project?: Maybe<ProjectRecord>;
  /** Returns the single instance record */
  projectFooter?: Maybe<ProjectFooterRecord>;
  /** Returns the single instance record */
  showcase?: Maybe<ShowcaseRecord>;
  /** Returns a specific record */
  staff?: Maybe<StaffRecord>;
  /** Returns the single instance record */
  start?: Maybe<StartRecord>;
  /** Returns a specific asset */
  upload?: Maybe<FileField>;
};


/** The query root for this schema */
type Query_allClientsMetaArgs = {
  filter?: InputMaybe<ClientModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProjectsMetaArgs = {
  filter?: InputMaybe<ProjectModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allStaffsMetaArgs = {
  filter?: InputMaybe<StaffModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allUploadsMetaArgs = {
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_siteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryaboutArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryallClientsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ClientModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ClientModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallProjectsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallStaffsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StaffModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StaffModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryclientArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ClientModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ClientModelOrderBy>>>;
};


/** The query root for this schema */
type QuerycontactArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryjoinArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryofferArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryprojectArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
};


/** The query root for this schema */
type QueryprojectFooterArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryshowcaseArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QuerystaffArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StaffModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StaffModelOrderBy>>>;
};


/** The query root for this schema */
type QuerystartArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryuploadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
};

type RecordInterface = {
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
};


type RecordInterface_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<ResolutionType>;
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<ResolutionType>;
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
};

enum ResolutionType {
  icon = 'icon',
  large = 'large',
  medium = 'medium',
  small = 'small'
}

type ResponsiveImage = {
  __typename?: 'ResponsiveImage';
  alt?: Maybe<Scalars['String']['output']>;
  aspectRatio: Scalars['FloatType']['output'];
  base64?: Maybe<Scalars['String']['output']>;
  bgColor?: Maybe<Scalars['String']['output']>;
  height: Scalars['IntType']['output'];
  sizes: Scalars['String']['output'];
  src: Scalars['String']['output'];
  srcSet: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  webpSrcSet: Scalars['String']['output'];
  width: Scalars['IntType']['output'];
};

type SectionModelHeadlineField = {
  __typename?: 'SectionModelHeadlineField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type SectionModelTextBlocksField = ButtonRecord | ExpandableListRecord | ImageGalleryRecord;

type SectionModelTextField = {
  __typename?: 'SectionModelTextField';
  blocks: Array<SectionModelTextBlocksField>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type Section (section) */
type SectionRecord = RecordInterface & {
  __typename?: 'SectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  headline?: Maybe<SectionModelHeadlineField>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  referenceProject?: Maybe<ProjectRecord>;
  sectionId?: Maybe<Scalars['String']['output']>;
  text?: Maybe<SectionModelTextField>;
};


/** Block of type Section (section) */
type SectionRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type SectionRecordListListNonNullMultiLocaleField = {
  __typename?: 'SectionRecordListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<SectionRecord>;
};

type SeoField = {
  __typename?: 'SeoField';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<FileField>;
  noIndex?: Maybe<Scalars['BooleanType']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  twitterCard?: Maybe<Scalars['String']['output']>;
};

/** Block of type SEO (seo) */
type SeoRecord = RecordInterface & {
  __typename?: 'SeoRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  title?: Maybe<Scalars['String']['output']>;
};


/** Block of type SEO (seo) */
type SeoRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type SEO (seo) */
type SeoRecorddescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

type ShortcutModelHeadlineField = {
  __typename?: 'ShortcutModelHeadlineField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type ShortcutModelTextField = {
  __typename?: 'ShortcutModelTextField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type Shortcut (shortcut) */
type ShortcutRecord = RecordInterface & {
  __typename?: 'ShortcutRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  headline?: Maybe<ShortcutModelHeadlineField>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  linkText?: Maybe<Scalars['String']['output']>;
  sectionId?: Maybe<Scalars['String']['output']>;
  text?: Maybe<ShortcutModelTextField>;
};


/** Block of type Shortcut (shortcut) */
type ShortcutRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Our projects (showcase) */
type ShowcaseRecord = RecordInterface & {
  __typename?: 'ShowcaseRecord';
  _allFooterLocales?: Maybe<Array<FooterRecordMultiLocaleField>>;
  _allHeaderLocales?: Maybe<Array<HeaderRecordNonNullMultiLocaleField>>;
  _allSectionsLocales?: Maybe<Array<SectionRecordListListNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  footer?: Maybe<FooterRecord>;
  header: HeaderRecord;
  id: Scalars['ItemId']['output'];
  sections: Array<SectionRecord>;
  selectedProjects: Array<ProjectRecord>;
  seoMeta: SeoRecord;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type Our projects (showcase) */
type ShowcaseRecord_allFooterLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Our projects (showcase) */
type ShowcaseRecord_allHeaderLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Our projects (showcase) */
type ShowcaseRecord_allSectionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Our projects (showcase) */
type ShowcaseRecord_allTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Our projects (showcase) */
type ShowcaseRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Our projects (showcase) */
type ShowcaseRecordfooterArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Our projects (showcase) */
type ShowcaseRecordheaderArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Our projects (showcase) */
type ShowcaseRecordsectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Our projects (showcase) */
type ShowcaseRecordtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type Site = {
  __typename?: 'Site';
  favicon?: Maybe<FileField>;
  faviconMetaTags: Array<Tag>;
  globalSeo?: Maybe<GlobalSeoField>;
  locales: Array<SiteLocale>;
  noIndex?: Maybe<Scalars['BooleanType']['output']>;
};


type SitefaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>;
};


type SiteglobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

enum SiteLocale {
  en = 'en',
  sv = 'sv'
}

/** Specifies how to filter Slug fields */
type SlugFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that have one of the specified slugs */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that do have one of the specified slugs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type StaffModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<StaffModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StaffModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  name?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionFilter>;
  text?: InputMaybe<StructuredTextFilter>;
};

enum StaffModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  email_ASC = 'email_ASC',
  email_DESC = 'email_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC'
}

type StaffModelTextField = {
  __typename?: 'StaffModelTextField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type StaffModelTextFieldMultiLocaleField = {
  __typename?: 'StaffModelTextFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<StaffModelTextField>;
};

/** Record of type Staff (staff) */
type StaffRecord = RecordInterface & {
  __typename?: 'StaffRecord';
  _allTextLocales?: Maybe<Array<StaffModelTextFieldMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['IntType']['output']>;
  text?: Maybe<StaffModelTextField>;
};


/** Record of type Staff (staff) */
type StaffRecord_allTextLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Staff (staff) */
type StaffRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Staff (staff) */
type StaffRecordtextArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type StartModelJobsHeadlineField = {
  __typename?: 'StartModelJobsHeadlineField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type StartModelJobsHeadlineFieldMultiLocaleField = {
  __typename?: 'StartModelJobsHeadlineFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<StartModelJobsHeadlineField>;
};

type StartModelJobsTextField = {
  __typename?: 'StartModelJobsTextField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type StartModelJobsTextFieldMultiLocaleField = {
  __typename?: 'StartModelJobsTextFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<StartModelJobsTextField>;
};

type StartModelTextHeadlineField = {
  __typename?: 'StartModelTextHeadlineField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type StartModelTextHeadlineFieldMultiLocaleField = {
  __typename?: 'StartModelTextHeadlineFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<StartModelTextHeadlineField>;
};

type StartModelTextTextField = {
  __typename?: 'StartModelTextTextField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type StartModelTextTextFieldMultiLocaleField = {
  __typename?: 'StartModelTextTextFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<StartModelTextTextField>;
};

/** Record of type Start (start) */
type StartRecord = RecordInterface & {
  __typename?: 'StartRecord';
  _allFooterLocales?: Maybe<Array<FooterRecordMultiLocaleField>>;
  _allHeaderLocales?: Maybe<Array<HeaderRecordNonNullMultiLocaleField>>;
  _allJobsHeadlineLocales?: Maybe<Array<StartModelJobsHeadlineFieldMultiLocaleField>>;
  _allJobsTextLocales?: Maybe<Array<StartModelJobsTextFieldMultiLocaleField>>;
  _allTextHeadlineLocales?: Maybe<Array<StartModelTextHeadlineFieldMultiLocaleField>>;
  _allTextTextLocales?: Maybe<Array<StartModelTextTextFieldMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  footer?: Maybe<FooterRecord>;
  header: HeaderRecord;
  id: Scalars['ItemId']['output'];
  jobsHeadline?: Maybe<StartModelJobsHeadlineField>;
  jobsImage?: Maybe<FileField>;
  jobsText?: Maybe<StartModelJobsTextField>;
  news: Array<NewsRecord>;
  newsHeadline?: Maybe<Scalars['String']['output']>;
  seoMeta: SeoRecord;
  shortcuts: Array<ShortcutRecord>;
  textHeadline?: Maybe<StartModelTextHeadlineField>;
  textText?: Maybe<StartModelTextTextField>;
};


/** Record of type Start (start) */
type StartRecord_allFooterLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Start (start) */
type StartRecord_allHeaderLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Start (start) */
type StartRecord_allJobsHeadlineLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Start (start) */
type StartRecord_allJobsTextLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Start (start) */
type StartRecord_allTextHeadlineLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Start (start) */
type StartRecord_allTextTextLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Start (start) */
type StartRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Start (start) */
type StartRecordfooterArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Start (start) */
type StartRecordheaderArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Start (start) */
type StartRecordjobsHeadlineArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Start (start) */
type StartRecordjobsTextArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Start (start) */
type StartRecordtextHeadlineArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Start (start) */
type StartRecordtextTextArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by status */
type StatusFilter = {
  /** Search the record with the specified status */
  eq?: InputMaybe<ItemStatus>;
  /** Search records with the specified statuses */
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
  /** Exclude the record with the specified status */
  neq?: InputMaybe<ItemStatus>;
  /** Search records without the specified statuses */
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
};

/** Specifies how to filter Single-line string fields */
type StringFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type StringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars['BooleanType']['input']>;
  pattern: Scalars['String']['input'];
  regexp?: InputMaybe<Scalars['BooleanType']['input']>;
};

type StringMultiLocaleField = {
  __typename?: 'StringMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<Scalars['String']['output']>;
};

type StringNonNullMultiLocaleField = {
  __typename?: 'StringNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Scalars['String']['output'];
};

/** Specifies how to filter Structured Text fields values */
type StructuredTextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field set as blank (null or single empty paragraph) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type Tag = {
  __typename?: 'Tag';
  attributes?: Maybe<Scalars['MetaTagAttributes']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  tag: Scalars['String']['output'];
};

/** Specifies how to filter by upload type */
type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: InputMaybe<UploadType>;
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<UploadType>>>;
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<UploadType>;
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>;
};

/** Specifies how to filter by update datetime */
type UpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by default alt */
type UploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by auhtor */
type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by basename */
type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by colors */
type UploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<ColorBucketType>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
};

/** Specifies how to filter by copyright */
type UploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by creation datetime */
type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by filename */
type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type UploadFilter = {
  AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  _createdAt?: InputMaybe<UploadCreatedAtFilter>;
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>;
  alt?: InputMaybe<UploadAltFilter>;
  author?: InputMaybe<UploadAuthorFilter>;
  basename?: InputMaybe<UploadBasenameFilter>;
  colors?: InputMaybe<UploadColorsFilter>;
  copyright?: InputMaybe<UploadCopyrightFilter>;
  filename?: InputMaybe<UploadFilenameFilter>;
  format?: InputMaybe<UploadFormatFilter>;
  height?: InputMaybe<UploadHeightFilter>;
  id?: InputMaybe<UploadIdFilter>;
  inUse?: InputMaybe<InUseFilter>;
  md5?: InputMaybe<UploadMd5Filter>;
  mimeType?: InputMaybe<UploadMimeTypeFilter>;
  notes?: InputMaybe<UploadNotesFilter>;
  orientation?: InputMaybe<OrientationFilter>;
  resolution?: InputMaybe<ResolutionFilter>;
  size?: InputMaybe<UploadSizeFilter>;
  smartTags?: InputMaybe<UploadTagsFilter>;
  tags?: InputMaybe<UploadTagsFilter>;
  title?: InputMaybe<UploadTitleFilter>;
  type?: InputMaybe<TypeFilter>;
  width?: InputMaybe<UploadWidthFilter>;
};

/** Specifies how to filter by format */
type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by height */
type UploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by ID */
type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Specifies how to filter by MD5 */
type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by mime type */
type UploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by notes */
type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

enum UploadOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  basename_ASC = 'basename_ASC',
  basename_DESC = 'basename_DESC',
  filename_ASC = 'filename_ASC',
  filename_DESC = 'filename_DESC',
  format_ASC = 'format_ASC',
  format_DESC = 'format_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  mimeType_ASC = 'mimeType_ASC',
  mimeType_DESC = 'mimeType_DESC',
  resolution_ASC = 'resolution_ASC',
  resolution_DESC = 'resolution_DESC',
  size_ASC = 'size_ASC',
  size_DESC = 'size_DESC'
}

enum UploadOrientation {
  landscape = 'landscape',
  portrait = 'portrait',
  square = 'square'
}

/** Specifies how to filter by size */
type UploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by tags */
type UploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Specifies how to filter by default title */
type UploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

enum UploadType {
  archive = 'archive',
  audio = 'audio',
  image = 'image',
  pdfdocument = 'pdfdocument',
  presentation = 'presentation',
  richtext = 'richtext',
  spreadsheet = 'spreadsheet',
  video = 'video'
}

/** Specifies how to filter by update datetime */
type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

type UploadVideoField = {
  __typename?: 'UploadVideoField';
  alt?: Maybe<Scalars['String']['output']>;
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  framerate?: Maybe<Scalars['Int']['output']>;
  height: Scalars['IntType']['output'];
  mp4Url?: Maybe<Scalars['String']['output']>;
  muxAssetId: Scalars['String']['output'];
  muxPlaybackId: Scalars['String']['output'];
  streamingUrl: Scalars['String']['output'];
  thumbhash?: Maybe<Scalars['String']['output']>;
  thumbnailUrl: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  width: Scalars['IntType']['output'];
};


type UploadVideoFieldaltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type UploadVideoFieldblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


type UploadVideoFieldmp4UrlArgs = {
  exactRes?: InputMaybe<VideoMp4Res>;
  res?: InputMaybe<VideoMp4Res>;
};


type UploadVideoFieldthumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>;
};


type UploadVideoFieldtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by width */
type UploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

enum VideoMp4Res {
  high = 'high',
  low = 'low',
  medium = 'medium'
}

type focalPoint = {
  __typename?: 'focalPoint';
  x: Scalars['FloatType']['output'];
  y: Scalars['FloatType']['output'];
};

type AboutQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
}>;


type AboutQuery = { __typename?: 'Query', about?: { __typename?: 'AboutRecord', title?: string | null, header: { __typename?: 'HeaderRecord', id: any, align: string, headline?: { __typename?: 'HeaderModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'HeaderModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, image?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null }, sections: Array<{ __typename?: 'SectionRecord', id: any, sectionId?: string | null, headline?: { __typename?: 'SectionModelHeadlineField', blocks: Array<string>, links: Array<string>, inlineBlocks: Array<string>, value: any } | null, text?: { __typename?: 'SectionModelTextField', links: Array<string>, value: any, blocks: Array<{ __typename: 'ButtonRecord', id: any, text?: string | null, url?: string | null } | { __typename: 'ExpandableListRecord', id: any, items: Array<{ __typename?: 'ExpandableListItemRecord', id: any, title?: string | null, text?: { __typename?: 'ExpandableListItemModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null }> } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null }> }> } | null, image?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null, referenceProject?: { __typename?: 'ProjectRecord', title?: string | null, slug: string, image?: { __typename?: 'FileField', alt?: string | null, basename: string, format: string, height?: any | null, id: any, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, headline?: { __typename?: 'ProjectModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'ProjectModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, client?: { __typename?: 'ClientRecord', name?: string | null, logo?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null } | null } | null }>, footer: { __typename?: 'FooterRecord', id: any, buttonText?: string | null, headline?: { __typename?: 'FooterModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'FooterModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, link?: { __typename: 'AboutRecord', id: any } | { __typename: 'ContactRecord', id: any } | null }, seoMeta: { __typename?: 'SeoRecord', title?: string | null, description?: string | null } } | null, allStaffs: Array<{ __typename?: 'StaffRecord', id: any, name?: string | null, email?: string | null, image?: { __typename?: 'FileField', alt?: string | null, basename: string, format: string, height?: any | null, id: any, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, text?: { __typename?: 'StaffModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null }> };

type ClientQueryVariables = Exact<{ [key: string]: never; }>;


type ClientQuery = { __typename?: 'Query', client?: { __typename?: 'ClientRecord', name?: string | null, logo?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null } | null };

type AllClientsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


type AllClientsQuery = { __typename?: 'Query', allClients: Array<{ __typename?: 'ClientRecord', name?: string | null, logo?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null }>, _allClientsMeta: { __typename?: 'CollectionMetadata', count: any } };

type ClientFragment = { __typename?: 'ClientRecord', name?: string | null, logo?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null };

type ClientLightFragment = { __typename?: 'ClientRecord', name?: string | null, logo?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null };

type ContactQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
}>;


type ContactQuery = { __typename?: 'Query', contact?: { __typename?: 'ContactRecord', title?: string | null, header: { __typename?: 'HeaderRecord', id: any, align: string, headline?: { __typename?: 'HeaderModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'HeaderModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, image?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null }, sections: Array<{ __typename?: 'SectionRecord', id: any, sectionId?: string | null, headline?: { __typename?: 'SectionModelHeadlineField', blocks: Array<string>, links: Array<string>, inlineBlocks: Array<string>, value: any } | null, text?: { __typename?: 'SectionModelTextField', links: Array<string>, value: any, blocks: Array<{ __typename: 'ButtonRecord', id: any, text?: string | null, url?: string | null } | { __typename: 'ExpandableListRecord', id: any, items: Array<{ __typename?: 'ExpandableListItemRecord', id: any, title?: string | null, text?: { __typename?: 'ExpandableListItemModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null }> } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null }> }> } | null, image?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null, referenceProject?: { __typename?: 'ProjectRecord', title?: string | null, slug: string, image?: { __typename?: 'FileField', alt?: string | null, basename: string, format: string, height?: any | null, id: any, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, headline?: { __typename?: 'ProjectModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'ProjectModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, client?: { __typename?: 'ClientRecord', name?: string | null, logo?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null } | null } | null }>, footer: { __typename?: 'FooterRecord', id: any, buttonText?: string | null, headline?: { __typename?: 'FooterModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'FooterModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, link?: { __typename: 'AboutRecord', id: any } | { __typename: 'ContactRecord', id: any } | null } } | null };

type FileFragment = { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string };

type FooterFragment = { __typename?: 'FooterRecord', id: any, buttonText?: string | null, headline?: { __typename?: 'FooterModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'FooterModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, link?: { __typename: 'AboutRecord', id: any } | { __typename: 'ContactRecord', id: any } | null };

type HeaderFragment = { __typename?: 'HeaderRecord', id: any, align: string, headline?: { __typename?: 'HeaderModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'HeaderModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, image?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null };

type ImageFragment = { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null };

type ImageSquareFragment = { __typename?: 'FileField', alt?: string | null, basename: string, format: string, height?: any | null, id: any, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null };

type ImageThumbnailFragment = { __typename?: 'FileField', alt?: string | null, basename: string, format: string, height?: any | null, id: any, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null };

type ImageWideFragment = { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null };

type MediaFragment = { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, height?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, mp4Url?: string | null, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null };

type SectionFragment = { __typename?: 'SectionRecord', id: any, sectionId?: string | null, headline?: { __typename?: 'SectionModelHeadlineField', blocks: Array<string>, links: Array<string>, inlineBlocks: Array<string>, value: any } | null, text?: { __typename?: 'SectionModelTextField', links: Array<string>, value: any, blocks: Array<{ __typename: 'ButtonRecord', id: any, text?: string | null, url?: string | null } | { __typename: 'ExpandableListRecord', id: any, items: Array<{ __typename?: 'ExpandableListItemRecord', id: any, title?: string | null, text?: { __typename?: 'ExpandableListItemModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null }> } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null }> }> } | null, image?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null, referenceProject?: { __typename?: 'ProjectRecord', title?: string | null, slug: string, image?: { __typename?: 'FileField', alt?: string | null, basename: string, format: string, height?: any | null, id: any, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, headline?: { __typename?: 'ProjectModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'ProjectModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, client?: { __typename?: 'ClientRecord', name?: string | null, logo?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null } | null } | null };

type ShortcutFragment = { __typename?: 'ShortcutRecord', id: any, linkText?: string | null, sectionId?: string | null, image?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null, headline?: { __typename?: 'ShortcutModelHeadlineField', value: any, blocks: Array<string>, links: Array<string> } | null, text?: { __typename?: 'ShortcutModelTextField', value: any, blocks: Array<string>, links: Array<string> } | null };

type SiteFragment = { __typename?: 'Site', faviconMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }>, globalSeo?: { __typename?: 'GlobalSeoField', facebookPageUrl?: string | null, siteName?: string | null, titleSuffix?: string | null, twitterAccount?: string | null, fallbackSeo?: { __typename?: 'SeoField', description?: string | null, title?: string | null, twitterCard?: string | null, image?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null } | null } | null };

type GlobalQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
}>;


type GlobalQuery = { __typename?: 'Query', site: { __typename?: 'Site', faviconMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }>, globalSeo?: { __typename?: 'GlobalSeoField', facebookPageUrl?: string | null, siteName?: string | null, titleSuffix?: string | null, twitterAccount?: string | null, fallbackSeo?: { __typename?: 'SeoField', description?: string | null, title?: string | null, twitterCard?: string | null, image?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null } | null } | null } };

type JoinQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
}>;


type JoinQuery = { __typename?: 'Query', join?: { __typename?: 'JoinRecord', title?: string | null, header: { __typename?: 'HeaderRecord', id: any, align: string, headline?: { __typename?: 'HeaderModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'HeaderModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, image?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null }, sections: Array<{ __typename?: 'SectionRecord', id: any, sectionId?: string | null, headline?: { __typename?: 'SectionModelHeadlineField', blocks: Array<string>, links: Array<string>, inlineBlocks: Array<string>, value: any } | null, text?: { __typename?: 'SectionModelTextField', links: Array<string>, value: any, blocks: Array<{ __typename: 'ButtonRecord', id: any, text?: string | null, url?: string | null } | { __typename: 'ExpandableListRecord', id: any, items: Array<{ __typename?: 'ExpandableListItemRecord', id: any, title?: string | null, text?: { __typename?: 'ExpandableListItemModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null }> } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null }> }> } | null, image?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null, referenceProject?: { __typename?: 'ProjectRecord', title?: string | null, slug: string, image?: { __typename?: 'FileField', alt?: string | null, basename: string, format: string, height?: any | null, id: any, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, headline?: { __typename?: 'ProjectModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'ProjectModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, client?: { __typename?: 'ClientRecord', name?: string | null, logo?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null } | null } | null }>, footer: { __typename?: 'FooterRecord', id: any, buttonText?: string | null, headline?: { __typename?: 'FooterModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'FooterModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, link?: { __typename: 'AboutRecord', id: any } | { __typename: 'ContactRecord', id: any } | null }, seoMeta: { __typename?: 'SeoRecord', title?: string | null, description?: string | null } } | null };

type JoinFragment = { __typename?: 'JoinRecord', title?: string | null, header: { __typename?: 'HeaderRecord', id: any, align: string, headline?: { __typename?: 'HeaderModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'HeaderModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, image?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null }, sections: Array<{ __typename?: 'SectionRecord', id: any, sectionId?: string | null, headline?: { __typename?: 'SectionModelHeadlineField', blocks: Array<string>, links: Array<string>, inlineBlocks: Array<string>, value: any } | null, text?: { __typename?: 'SectionModelTextField', links: Array<string>, value: any, blocks: Array<{ __typename: 'ButtonRecord', id: any, text?: string | null, url?: string | null } | { __typename: 'ExpandableListRecord', id: any, items: Array<{ __typename?: 'ExpandableListItemRecord', id: any, title?: string | null, text?: { __typename?: 'ExpandableListItemModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null }> } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null }> }> } | null, image?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null, referenceProject?: { __typename?: 'ProjectRecord', title?: string | null, slug: string, image?: { __typename?: 'FileField', alt?: string | null, basename: string, format: string, height?: any | null, id: any, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, headline?: { __typename?: 'ProjectModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'ProjectModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, client?: { __typename?: 'ClientRecord', name?: string | null, logo?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null } | null } | null }>, footer: { __typename?: 'FooterRecord', id: any, buttonText?: string | null, headline?: { __typename?: 'FooterModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'FooterModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, link?: { __typename: 'AboutRecord', id: any } | { __typename: 'ContactRecord', id: any } | null }, seoMeta: { __typename?: 'SeoRecord', title?: string | null, description?: string | null } };

type OfferQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
}>;


type OfferQuery = { __typename?: 'Query', offer?: { __typename?: 'OfferRecord', title?: string | null, footer: { __typename?: 'FooterRecord', id: any, buttonText?: string | null, headline?: { __typename?: 'FooterModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'FooterModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, link?: { __typename: 'AboutRecord', id: any } | { __typename: 'ContactRecord', id: any } | null }, header: { __typename?: 'HeaderRecord', id: any, align: string, headline?: { __typename?: 'HeaderModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'HeaderModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, image?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null }, sections: Array<{ __typename?: 'SectionRecord', id: any, sectionId?: string | null, headline?: { __typename?: 'SectionModelHeadlineField', blocks: Array<string>, links: Array<string>, inlineBlocks: Array<string>, value: any } | null, text?: { __typename?: 'SectionModelTextField', links: Array<string>, value: any, blocks: Array<{ __typename: 'ButtonRecord', id: any, text?: string | null, url?: string | null } | { __typename: 'ExpandableListRecord', id: any, items: Array<{ __typename?: 'ExpandableListItemRecord', id: any, title?: string | null, text?: { __typename?: 'ExpandableListItemModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null }> } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null }> }> } | null, image?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null, referenceProject?: { __typename?: 'ProjectRecord', title?: string | null, slug: string, image?: { __typename?: 'FileField', alt?: string | null, basename: string, format: string, height?: any | null, id: any, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, headline?: { __typename?: 'ProjectModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'ProjectModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, client?: { __typename?: 'ClientRecord', name?: string | null, logo?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null } | null } | null }>, seoMeta: { __typename?: 'SeoRecord', title?: string | null, description?: string | null } } | null };

type OfferFragment = { __typename?: 'OfferRecord', title?: string | null, footer: { __typename?: 'FooterRecord', id: any, buttonText?: string | null, headline?: { __typename?: 'FooterModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'FooterModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, link?: { __typename: 'AboutRecord', id: any } | { __typename: 'ContactRecord', id: any } | null }, header: { __typename?: 'HeaderRecord', id: any, align: string, headline?: { __typename?: 'HeaderModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'HeaderModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, image?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null }, sections: Array<{ __typename?: 'SectionRecord', id: any, sectionId?: string | null, headline?: { __typename?: 'SectionModelHeadlineField', blocks: Array<string>, links: Array<string>, inlineBlocks: Array<string>, value: any } | null, text?: { __typename?: 'SectionModelTextField', links: Array<string>, value: any, blocks: Array<{ __typename: 'ButtonRecord', id: any, text?: string | null, url?: string | null } | { __typename: 'ExpandableListRecord', id: any, items: Array<{ __typename?: 'ExpandableListItemRecord', id: any, title?: string | null, text?: { __typename?: 'ExpandableListItemModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null }> } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null }> }> } | null, image?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null, referenceProject?: { __typename?: 'ProjectRecord', title?: string | null, slug: string, image?: { __typename?: 'FileField', alt?: string | null, basename: string, format: string, height?: any | null, id: any, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, headline?: { __typename?: 'ProjectModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'ProjectModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, client?: { __typename?: 'ClientRecord', name?: string | null, logo?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null } | null } | null }>, seoMeta: { __typename?: 'SeoRecord', title?: string | null, description?: string | null } };

type ProjectQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


type ProjectQuery = { __typename?: 'Query', project?: { __typename?: 'ProjectRecord', title?: string | null, slug: string, headline?: { __typename?: 'ProjectModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'ProjectModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, image?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null, client?: { __typename?: 'ClientRecord', name?: string | null, logo?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null } | null, what?: { __typename?: 'ProjectModelWhatField', links: Array<string>, value: any, blocks: Array<{ __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null }> }> } | null, why?: { __typename?: 'ProjectModelWhyField', links: Array<string>, value: any, blocks: Array<{ __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null }> }> } | null, result?: { __typename?: 'ProjectModelResultField', links: Array<string>, value: any, blocks: Array<{ __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null }> }> } | null } | null };

type AllProjectsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
}>;


type AllProjectsQuery = { __typename?: 'Query', allProjects: Array<{ __typename?: 'ProjectRecord', title?: string | null, slug: string, headline?: { __typename?: 'ProjectModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'ProjectModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, image?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null, client?: { __typename?: 'ClientRecord', name?: string | null, logo?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null } | null, what?: { __typename?: 'ProjectModelWhatField', links: Array<string>, value: any, blocks: Array<{ __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null }> }> } | null, why?: { __typename?: 'ProjectModelWhyField', links: Array<string>, value: any, blocks: Array<{ __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null }> }> } | null, result?: { __typename?: 'ProjectModelResultField', links: Array<string>, value: any, blocks: Array<{ __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null }> }> } | null }>, _allProjectsMeta: { __typename?: 'CollectionMetadata', count: any } };

type ProjectFooterQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
}>;


type ProjectFooterQuery = { __typename?: 'Query', projectFooter?: { __typename?: 'ProjectFooterRecord', footer: { __typename?: 'FooterRecord', id: any, buttonText?: string | null, headline?: { __typename?: 'FooterModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'FooterModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, link?: { __typename: 'AboutRecord', id: any } | { __typename: 'ContactRecord', id: any } | null } } | null };

type ProjectFragment = { __typename?: 'ProjectRecord', title?: string | null, slug: string, headline?: { __typename?: 'ProjectModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'ProjectModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, image?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null, client?: { __typename?: 'ClientRecord', name?: string | null, logo?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null } | null, what?: { __typename?: 'ProjectModelWhatField', links: Array<string>, value: any, blocks: Array<{ __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null }> }> } | null, why?: { __typename?: 'ProjectModelWhyField', links: Array<string>, value: any, blocks: Array<{ __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null }> }> } | null, result?: { __typename?: 'ProjectModelResultField', links: Array<string>, value: any, blocks: Array<{ __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null }> }> } | null };

type ProjectLightFragment = { __typename?: 'ProjectRecord', title?: string | null, slug: string, image?: { __typename?: 'FileField', alt?: string | null, basename: string, format: string, height?: any | null, id: any, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, headline?: { __typename?: 'ProjectModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'ProjectModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, client?: { __typename?: 'ClientRecord', name?: string | null, logo?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null } | null };

type ShowcaseQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
}>;


type ShowcaseQuery = { __typename?: 'Query', showcase?: { __typename?: 'ShowcaseRecord', title?: string | null, header: { __typename?: 'HeaderRecord', id: any, align: string, headline?: { __typename?: 'HeaderModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'HeaderModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, image?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null }, sections: Array<{ __typename?: 'SectionRecord', id: any, sectionId?: string | null, headline?: { __typename?: 'SectionModelHeadlineField', blocks: Array<string>, links: Array<string>, inlineBlocks: Array<string>, value: any } | null, text?: { __typename?: 'SectionModelTextField', links: Array<string>, value: any, blocks: Array<{ __typename: 'ButtonRecord', id: any, text?: string | null, url?: string | null } | { __typename: 'ExpandableListRecord', id: any, items: Array<{ __typename?: 'ExpandableListItemRecord', id: any, title?: string | null, text?: { __typename?: 'ExpandableListItemModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null }> } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null }> }> } | null, image?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null, referenceProject?: { __typename?: 'ProjectRecord', title?: string | null, slug: string, image?: { __typename?: 'FileField', alt?: string | null, basename: string, format: string, height?: any | null, id: any, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, headline?: { __typename?: 'ProjectModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'ProjectModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, client?: { __typename?: 'ClientRecord', name?: string | null, logo?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null } | null } | null }>, footer?: { __typename?: 'FooterRecord', id: any, buttonText?: string | null, headline?: { __typename?: 'FooterModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'FooterModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, link?: { __typename: 'AboutRecord', id: any } | { __typename: 'ContactRecord', id: any } | null } | null, seoMeta: { __typename?: 'SeoRecord', title?: string | null, description?: string | null } } | null };

type ShowcaseFooterQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
}>;


type ShowcaseFooterQuery = { __typename?: 'Query', showcase?: { __typename?: 'ShowcaseRecord', footer?: { __typename?: 'FooterRecord', id: any, buttonText?: string | null, headline?: { __typename?: 'FooterModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'FooterModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, link?: { __typename: 'AboutRecord', id: any } | { __typename: 'ContactRecord', id: any } | null } | null } | null };

type ShowcaseFragment = { __typename?: 'ShowcaseRecord', title?: string | null, header: { __typename?: 'HeaderRecord', id: any, align: string, headline?: { __typename?: 'HeaderModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'HeaderModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, image?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null }, sections: Array<{ __typename?: 'SectionRecord', id: any, sectionId?: string | null, headline?: { __typename?: 'SectionModelHeadlineField', blocks: Array<string>, links: Array<string>, inlineBlocks: Array<string>, value: any } | null, text?: { __typename?: 'SectionModelTextField', links: Array<string>, value: any, blocks: Array<{ __typename: 'ButtonRecord', id: any, text?: string | null, url?: string | null } | { __typename: 'ExpandableListRecord', id: any, items: Array<{ __typename?: 'ExpandableListItemRecord', id: any, title?: string | null, text?: { __typename?: 'ExpandableListItemModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null }> } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null }> }> } | null, image?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null, referenceProject?: { __typename?: 'ProjectRecord', title?: string | null, slug: string, image?: { __typename?: 'FileField', alt?: string | null, basename: string, format: string, height?: any | null, id: any, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, headline?: { __typename?: 'ProjectModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'ProjectModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, client?: { __typename?: 'ClientRecord', name?: string | null, logo?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null } | null } | null }>, footer?: { __typename?: 'FooterRecord', id: any, buttonText?: string | null, headline?: { __typename?: 'FooterModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'FooterModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, link?: { __typename: 'AboutRecord', id: any } | { __typename: 'ContactRecord', id: any } | null } | null, seoMeta: { __typename?: 'SeoRecord', title?: string | null, description?: string | null } };

type AllShowcaseProjectsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


type AllShowcaseProjectsQuery = { __typename?: 'Query', allProjects: Array<{ __typename?: 'ProjectRecord', title?: string | null, slug: string, image?: { __typename?: 'FileField', alt?: string | null, basename: string, format: string, height?: any | null, id: any, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, headline?: { __typename?: 'ProjectModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'ProjectModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, client?: { __typename?: 'ClientRecord', name?: string | null, logo?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null } | null }>, _allProjectsMeta: { __typename?: 'CollectionMetadata', count: any } };

type StaffQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
}>;


type StaffQuery = { __typename?: 'Query', staff?: { __typename?: 'StaffRecord', id: any, name?: string | null, email?: string | null, image?: { __typename?: 'FileField', alt?: string | null, basename: string, format: string, height?: any | null, id: any, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, text?: { __typename?: 'StaffModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null } | null };

type AllStaffQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
}>;


type AllStaffQuery = { __typename?: 'Query', allStaffs: Array<{ __typename?: 'StaffRecord', id: any, name?: string | null, email?: string | null, image?: { __typename?: 'FileField', alt?: string | null, basename: string, format: string, height?: any | null, id: any, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, text?: { __typename?: 'StaffModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null }>, _allStaffsMeta: { __typename?: 'CollectionMetadata', count: any } };

type StaffFragment = { __typename?: 'StaffRecord', id: any, name?: string | null, email?: string | null, image?: { __typename?: 'FileField', alt?: string | null, basename: string, format: string, height?: any | null, id: any, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, text?: { __typename?: 'StaffModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null };

type StartQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
}>;


type StartQuery = { __typename?: 'Query', start?: { __typename?: 'StartRecord', newsHeadline?: string | null, header: { __typename?: 'HeaderRecord', id: any, align: string, headline?: { __typename?: 'HeaderModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'HeaderModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, image?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null }, footer?: { __typename?: 'FooterRecord', buttonText?: string | null, id: any, headline?: { __typename?: 'FooterModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'FooterModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, link?: { __typename: 'AboutRecord', id: any } | { __typename: 'ContactRecord', id: any } | null } | null, jobsImage?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null, jobsText?: { __typename?: 'StartModelJobsTextField', blocks: Array<string>, links: Array<string>, value: any } | null, jobsHeadline?: { __typename?: 'StartModelJobsHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, shortcuts: Array<{ __typename?: 'ShortcutRecord', id: any, linkText?: string | null, sectionId?: string | null, image?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null, headline?: { __typename?: 'ShortcutModelHeadlineField', value: any, blocks: Array<string>, links: Array<string> } | null, text?: { __typename?: 'ShortcutModelTextField', value: any, blocks: Array<string>, links: Array<string> } | null }>, textHeadline?: { __typename?: 'StartModelTextHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, textText?: { __typename?: 'StartModelTextTextField', blocks: Array<string>, links: Array<string>, value: any } | null, news: Array<{ __typename?: 'NewsRecord', id: any, text?: string | null, url: string }>, seoMeta: { __typename?: 'SeoRecord', title?: string | null, description?: string | null } } | null };

type StartFragment = { __typename?: 'StartRecord', newsHeadline?: string | null, header: { __typename?: 'HeaderRecord', id: any, align: string, headline?: { __typename?: 'HeaderModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'HeaderModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, image?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null }, footer?: { __typename?: 'FooterRecord', buttonText?: string | null, id: any, headline?: { __typename?: 'FooterModelHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, text?: { __typename?: 'FooterModelTextField', blocks: Array<string>, links: Array<string>, value: any } | null, link?: { __typename: 'AboutRecord', id: any } | { __typename: 'ContactRecord', id: any } | null } | null, jobsImage?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null, jobsText?: { __typename?: 'StartModelJobsTextField', blocks: Array<string>, links: Array<string>, value: any } | null, jobsHeadline?: { __typename?: 'StartModelJobsHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, shortcuts: Array<{ __typename?: 'ShortcutRecord', id: any, linkText?: string | null, sectionId?: string | null, image?: { __typename?: 'FileField', id: any, width?: any | null, height?: any | null, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, responsiveImage?: { __typename?: 'ResponsiveImage', width: any, height: any, alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null } | null } | null, headline?: { __typename?: 'ShortcutModelHeadlineField', value: any, blocks: Array<string>, links: Array<string> } | null, text?: { __typename?: 'ShortcutModelTextField', value: any, blocks: Array<string>, links: Array<string> } | null }>, textHeadline?: { __typename?: 'StartModelTextHeadlineField', blocks: Array<string>, links: Array<string>, value: any } | null, textText?: { __typename?: 'StartModelTextTextField', blocks: Array<string>, links: Array<string>, value: any } | null, news: Array<{ __typename?: 'NewsRecord', id: any, text?: string | null, url: string }>, seoMeta: { __typename?: 'SeoRecord', title?: string | null, description?: string | null } };
