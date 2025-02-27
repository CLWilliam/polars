searchState.loadedDescShard("polars_io", 0, "Options for Hive partitioning.\nInterface with cloud storage through the object_store …\nFunctionality for reading and writing CSV files.\nThis can be <code>None</code> to automatically enable for single …\nTake the SerReader and return a parsed DataFrame.\nReturns the argument unchanged.\nReturns the argument unchanged.\nSupport for traversing paginated response values that look …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\n(De)serialize JSON files.\nCreate a new instance of the <code>SerReader</code>\nFunctionality for reading and writing Apache Parquet files.\nFunctionality for writing a DataFrame partitioned into …\nMake sure that all columns are contiguous in memory by …\nValid compressions\nRead Apache Avro format into a <code>DataFrame</code>\nWrite a <code>DataFrame</code> to Apache Avro format\nValid compressions\nDeflate\nDeflate\nSnappy\nSnappy\nGet arrow schema of the avro File, this is faster than a …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGet schema of the Avro File\nColumns to select/ project\nSet the compression used. Defaults to None.\nStop reading when <code>n</code> rows are read.\nSet the reader’s column projection. This counts from 0, …\nUnity catalog client.\nNote, <code>data_source_format</code> can be None for some <code>table_type</code>s.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nNote: This struct contains all the field names for a few …\n<code>{&quot;type&quot;: {&quot;type&quot;: &quot;name&quot;, ..}}</code>\n`{“type”: “name”, ..}``\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWe prefer this as <code>type_text</code> cannot be trusted for …\ne.g.\nReturns <code>(schema, hive_schema)</code>\nA location on cloud storage, may have wildcards.\nAdaptor which wraps the interface of ObjectStore::BufWriter…\nPolars wrapper around <code>ObjectStore</code> functionality. This …\nThe bucket name.\nBuild an <code>ObjectStore</code> based on the URL and passed in url. …\nExecutes the given command directly.\nThe path components that need to be expanded.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nFetch byte ranges into a HashMap keyed by the range start. …\nList files with a prefix derived from the pattern.\nFetch the metadata of the parquet file, do not memoize it.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstructs a new CloudWriter from a path and an optional …\nParse a CloudLocation from an url.\nConstruct a new CloudWriter, re-using the given …\nConstruct an object_store <code>Path</code> from a string without any …\nThe prefix inside the bucket, this will be the full key …\nQueues the given command for further execution.\nThe scheme (s3, …).\nPerforms a set of actions within a synchronous update.\nGets the underlying <code>ObjectStore</code> implementation.\nA shared access key\nA set of AWS security credentials\nAn Azure storage credential\nAn authorization token\nWrapper that implements <code>IntoCredentialProvider</code>, <code>Debug</code>, …\nPrefer using <code>PlCredentialProvider::from_func</code> instead of …\nA Google Cloud Storage Credential\nFor testing purposes\nA shared access signature\nAn HTTP bearer token\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nAccepts a function that returns (credential, expiry time …\nIntended to be called with an internal …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAWS_ACCESS_KEY_ID\nAWS_SECRET_ACCESS_KEY\nDetermines if the credential requires the request be …\nAWS_SESSION_TOKEN\nMaster key for accessing storage account\nAWS Access Key\nThe name of the azure storage account\nConfiguration keys for <code>AmazonS3Builder</code>\nApplication credentials path\nAuthority host used in oauth flows\nTenant id used in oauth flows\nConfiguration keys for <code>MicrosoftAzureBuilder</code>\nBucket name\nBucket name\nSet the checksum algorithm for this client\nClient options\nClient options\nClient options\nService principal client id for authorizing requests\nService principal client secret for authorizing requests\nOptions to connect to various cloud providers.\nConfigure how to provide conditional put operations\nSet the container credentials relative URI\nContainer name\nConfigure how to provide <code>copy_if_not_exists</code>\nDefault region\nDisable tagging objects\nDisables tagging objects\nEncryption options\nSets custom endpoint for communicating with AWS S3.\nOverride the endpoint used to communicate with blob storage\nFabric cluster identifier\nFabric session token\nFabric token service url\nFabric workload host\nFile containing token for Azure AD workload identity …\nConfiguration keys for <code>GoogleCloudStorageBuilder</code>\nFall back to ImdsV1\nSet the instance metadata endpoint\nEndpoint to request a imds managed identity token\nMsi resource id for use with managed identity …\nObject id for use with managed identity authentication\nRegion\nEnable Support for S3 Requester Pays\nEnable Support for S3 Express One Zone\nShared access signature.\nSecret Access Key\nPath to the service account file\nThe serialized service account key.\nSkip signing request\nSkip signing requests\nToken to use for requests (passed to underlying provider)\nBearer token\nAvoid computing payload checksum when calculating …\nUse azure cli for acquiring access token\nUse object store with azurite storage emulator\nUse object store with url scheme …\nIf virtual hosted style request has to be used\nBuild the <code>object_store::ObjectStore</code> implementation for AWS.\nBuild the <code>object_store::ObjectStore</code> implementation for …\nBuild the <code>object_store::ObjectStore</code> implementation for GCP.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nParse a configuration from a Hashmap. This is the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSet the configuration for AWS connections. This is the …\nSet the configuration for Azure connections. This is the …\nSet the configuration for GCP connections. This is the …\nSet the maximum number of retries.\nFunctionality for reading CSV files.\nFunctionality for writing CSV files.\nMultiple values that are used for all columns\nA single value that’s used for all columns\nCreate a new DataFrame by reading a csv file.\nUtf8 encoding and unknown bytes are replaced with �.\nA string that indicates the start of a comment line. This …\nTuples that map column names to null value of that column\nA single byte character that indicates the start of a …\nUtf8 encoding.\nRead the number of rows without parsing columns useful for …\nRead the number of rows without parsing columns useful for …\nRead the file and create the DataFrame.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreates a CSV reader using a file handle.\nApply a function to the parse options.\nCreate a new CsvReader from a file/stream using default …\nCreates a new <code>CommentPrefix</code> from a <code>&amp;str</code>.\nCreates a new <code>CommentPrefix</code> for the <code>Multi</code> variant.\nCreates a new <code>CommentPrefix</code> for the <code>Single</code> variant.\nSkip lines according to newline char (e.g. escaping will …\nSkip rows according to the CSV spec.\nCreates a CSV reader using a file path.\nNote: This does not update the schema from the inference …\nSets the chunk size used by the parser. This influences …\nWhich columns to select.\nSets the comment prefix for this instance. Lines starting …\nParse floats with a comma as decimal separator.\nOverwrite the dtypes in the schema in the order of the …\nSet the encoding used by the file.\nSet the character used to indicate an end-of-line (eol).\nSets whether the CSV file has a header row.\nContinue with next batch when a ParserError is encountered.\nNumber of rows to use for schema inference. Pass None to …\nReduce memory consumption at the expense of performance\nTreat missing fields as null.\nLimits the number of rows to read.\nNumber of threads to use for reading. Defaults to the size …\nSet values that will be interpreted as missing/null.\nSets the CSV parsing options. See map_parse_options for an …\nWhich columns to select denoted by their index. The index …\nSet the character used for field quoting. This is most …\nWhether to raise an error if the frame is empty. By …\nWhether to makes the columns contiguous in memory.\nAdds a row index column.\nSet the schema to use for CSV file. The length of the …\nOverwrites the data types in the schema by column name.\nThe character used to separate fields in the CSV file. This\nStart reading after <code>skip_lines</code> lines. The header will be …\nStart reading after <code>skip_rows</code> rows. The header will be …\nNumber of rows to skip after the header row.\nTruncate lines that are longer than the schema.\nAutomatically try to parse dates/datetimes and time. If …\nA single value that’s used for all columns\nA different null value per column, computed from …\nAnalyzes a chunk of CSV data.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSplits datatypes that cannot be natively read into a …\nStores the Utf8 fields and the total string length seen …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nInfer the data type of a record\nInfer the schema of a CSV file by reading through the …\nCalls <code>U::from(self)</code>.\nQuote every field. Always.\nWrite a DataFrame to csv.\nOptions for writing CSV files.\nQuote fields only when necessary.\nNever quote any fields, even if it would produce invalid …\nQuote non-numeric fields.\nQuote style indicating when to insert quotes around a …\nOptions to serialize logical types to CSV.\nUsed for <code>DataType::Date</code>.\nUsed for <code>DataType::Datetime</code>.\nWrites the header of the csv file if not done already. …\nUsed for <code>DataType::Float64</code> and <code>DataType::Float32</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nSet whether to write UTF-8 BOM.\nSet whether to write headers.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nString appended after every row.\nNull value representation.\nQuoting character.\nWhen to insert quotes.\nUsed as separator.\nUsed for <code>DataType::Time</code>.\nSet the batch size to use while writing the CSV.\nSet the CSV file’s date format.\nSet the CSV file’s datetime format.\nSet the CSV file’s float precision.\nSet the CSV file’s forced scientific notation for floats.\nSet the CSV file’s line terminator.\nSet the CSV file’s null value representation.\nSet the single byte character used for quoting.\nSet the CSV file’s quoting behavior. See more on …\nSet the CSV file’s column separator as a byte character.\nSet the CSV file’s time format.\nWrite a batch to the csv writer.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nDirectly returns the cached file if it finds one without …\nReturns the cached file after ensuring it is up to date …\nMerge 2 lists of columns into one, where each list …\nCompression codec\nRead Arrows IPC format into a DataFrame\nAn Arrow IPC reader implemented on top of …\nRead Arrows Stream IPC format into a DataFrame\nWrite a DataFrame to Arrow’s Streaming IPC format\nWrite a DataFrame to Arrow’s IPC format\nLZ4 (framed)\nZSTD\nGet arrow schema of the Ipc Stream File, this is faster …\nData page compression\nGet schema-level custom metadata of the Ipc file\nGet schema-level custom metadata of the Ipc Stream file\nWrites the footer of the IPC file.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nmaintain the order the data was processed\nSet if the file is to be memory_mapped. Only works with …\nGet arrow schema of the Ipc File.\nGet schema of the Ipc Stream File\nSets custom schema metadata. Must be called before <code>start</code> …\nSets custom schema metadata. Must be called before <code>start</code> …\nColumns to select/ project\nColumns to select/ project\nSet the compression used. Defaults to None.\nSet the compression used. Defaults to None.\nSet the compression used. Defaults to None.\nSet the extension. Defaults to “.ipc”.\nStop reading when <code>n</code> rows are read.\nStop reading when <code>n</code> rows are read.\nSet the reader’s column projection. This counts from 0, …\nSet the reader’s column projection. This counts from 0, …\nAdd a row index column.\nAdd a row index column.\nWrite a batch to the ipc writer.\nWrite a encoded data to the ipc writer.\nA single JSON array containing each DataFrame row as an …\nThe format to use to write the DataFrame to JSON: <code>Json</code> (a …\nEach DataFrame row is serialized as a JSON object on a …\nReads JSON in one of the formats in <code>JsonFormat</code> into a …\nWrites a DataFrame to JSON.\nTake the SerReader and return a parsed DataFrame.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nSet the JSON reader to infer the schema of the file. …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nmaintain the order the data was processed\nCreate a new <code>JsonWriter</code> writing to <code>buffer</code> with format …\nSet the batch size (number of records to load at one time)\nReturn a <code>null</code> if an error occurs during parsing.\nSet the reader’s column projection: the names of the …\nSet the JSON file’s schema\nOverwrite parts of the inferred schema.\nWrite a batch to the json writer.\nTrait used to get a hold to file handler or to the …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nConstruct a <code>MemSlice</code> in a zero-copy manner from the …\nA <code>StructArray</code> is a nested <code>Array</code> with an optional validity …\nArcs this array into a <code>std::sync::Arc&lt;dyn Array&gt;</code>.\nBoxes this array into a <code>Box&lt;dyn Array&gt;</code>.\nReturns the fields of this <code>StructArray</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThis is the recommended way to create a json reader as …\nReturns the fields the <code>DataType::Struct</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nDeconstructs the <code>StructArray</code> into its individual …\nReturns an iterator of <code>Option&lt;Box&lt;dyn Array&gt;&gt;</code>\nReduce memory consumption at the expense of performance\nCreate a new JsonLineReader from a file/ stream\nReturns a new <code>StructArray</code>\nCreates an empty <code>StructArray</code>.\nCreates a null <code>StructArray</code> of length <code>length</code>.\nSet the outer nulls into the inner arrays.\nSets the validity of this array.\nSlices this <code>StructArray</code>.\nSlices this <code>StructArray</code>.\nReturns this array sliced.\nReturns this array sliced.\nTakes the validity of this array, leaving it without a …\nReturns a new <code>StructArray</code>.\nThe optional validity.\nReturns the values of this <code>StructArray</code>.\nReturns an iterator of <code>Box&lt;dyn Array&gt;</code>\nSets the chunk size used by the parser. This influences …\nSet values as <code>Null</code> if parsing fails because of schema …\nReturns this array with a new validity.\nApache Parquet file metadata.\nFunctionality for reading Apache Parquet files.\nFunctionality for reading and writing Apache Parquet files.\nMetadata for a Parquet file.\nParquet statistics for a nesting level\nReturns column order for <code>i</code>th column in this file. If …\nColumn (sort) order used for <code>min</code> and <code>max</code> values of each …\nString message for application that wrote this file.\nDeserializes the statistics in the column chunks from a …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nreturns the metadata\nkey_value_metadata of this file.\nMax row group height, useful for sharing column …\nnumber of rows in the file.\nThe row groups of this file\nReturns the <code>SchemaDescriptor</code> that describes schema of this …\nschema descriptor.\nDeserializes [<code>crate::parquet::thrift_format::FileMetadata</code>] …\nversion of this file.\nAutomatically determine over which unit to parallelize …\nParallelize over the columns\nMetadata for a Parquet file.\nDon’t parallelize\nA Parquet reader on top of the async object_store API. …\nRead Apache parquet format into a DataFrame.\nFirst evaluates the pushed-down predicates in parallel and …\nParallelize over the row groups\nColumn (sort) order used for <code>min</code> and <code>max</code> values of each …\nString message for application that wrote this file.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nInfers a <code>ArrowSchema</code> from parquet’s <code>FileMetadata</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTurn the batched reader into an iterator.\nkey_value_metadata of this file.\nMax row group height, useful for sharing column …\nCreate a new <code>ParquetReader</code> from an existing <code>Reader</code>.\nNumber of rows in the parquet file.\nnumber of rows in the file.\nRead the parquet file in parallel (default). The single …\nThe row groups of this file\n<code>Schema</code> of the file.\nschema descriptor.\nTry to reduce memory pressure at the expense of …\nUse statistics in the parquet to determine if pages can be …\nUse statistics in the parquet to determine if pages can be …\nversion of this file.\nChecks that the file contains all the columns in …\nColumns to select/ project\nSet the reader’s column projection. This counts from 0, …\nAdd a row index column.\nOnly positive offsets are supported for simplicity - the …\nUtility to ensure the dtype of the column in <code>current_schema</code>…\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA valid Brotli compression level.\nA valid Gzip compression level.\nThe compression strategy to use for writing Parquet files.\nWrite a DataFrame to Parquet format.\nThe statistics to write\nA valid Zstandard compression level.\nData page compression\nif <code>None</code> will be 1024^2 bytes\nWrites the footer of the parquet file. Returns the total …\nWrite the given DataFrame in the writer <code>W</code>. Returns the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nmaintain the order the data was processed\nCreate a new writer\nIf <code>None</code> will be all written to a single row group.\nSerialize columns in parallel\nCompute and write column statistics.\nSet the compression used. Defaults to <code>Zstd</code>.\nSets the maximum bytes size of a data page. If <code>None</code> will …\nSet the row group size (in number of rows) during writing. …\nCompute and write statistic\nWrite a batch to the parquet writer.\nWrite a partitioned parquet dataset. This functionality is …\nRecursively traverses directories and expands globs if <code>glob</code>…\nRecursively traverses directories and expands globs if <code>glob</code>…\nReturns <code>true</code> if <code>expanded_paths</code> were expanded from a single …\nGet the index of the first occurrence of a glob symbol.\nCheck if the path is a cloud url.\nReplaces a “~” in the Path with the home directory.\nKeep track of rayon threads that drive the runtime. Every …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nSpawns a future onto the Tokio runtime (see …\nRun a task on the rayon threadpool. To avoid deadlocks, if …\nA collection of column stats with a known schema.\nStatistics of the values in a column.\nCan take &amp;dyn Statistics and determine of a file should be …\nA predicate that gets given statistics and evaluates …\nReturns the <code>ColumnStats</code> of all columns in the batch, if …\nReturns the <code>DataType</code> of the column.\nTake a <code>DataFrame</code> and produces a boolean <code>Series</code> that serves …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstructs a new <code>ColumnStats</code> from a single-value Series.\nConstructs a new <code>ColumnStats</code> with only the <code>Field</code> …\nReturns the maximum value of each row group of the column.\nReturns the minimum value of each row group of the column.\nReturns the null count of each row group of the column.\nReturns the <code>ColumnStats</code> of a single column in the batch.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nColumn names that are used in the predicate.\nConstructs a new <code>ColumnStats</code>.\nConstructs a new <code>BatchStats</code>.\nReturns the null count of the column.\nReturns the number of rows in the batch.\nReturns the <code>Schema</code> of the batch.\nA predicate that gets given statistics and evaluates …\nReturns the maximum value of the column as a single-value …\nReturns the minimum value of the column as a single-value …\nReturns the minimum and maximum values of the column as a …\nTake the SerReader and return a parsed DataFrame.\nCreate a new instance of the <code>SerReader</code>\nMake sure that all columns are contiguous in memory by …\nMake sure that all columns are contiguous in memory by …\nUtility for decoding JSON that adds the response value to …\nDynamic dispatch to async functions.\nByte source backed by a <code>MemSlice</code>, which can potentially be …\nSupports both cloud and local files.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nPanics\nNote: This will mutably sort ranges for coalescing.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRepresents the compression algorithms that we have …\nIf the given byte slice starts with the “magic” bytes …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nDecompress <code>bytes</code> if compression is detected, otherwise …\nOpen a path for writing. Supports cloud paths.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nGiven a <code>slice</code> that is relative to the start of a list of …")