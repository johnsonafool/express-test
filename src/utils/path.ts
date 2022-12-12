import path from 'path';

// export default path.dirname(require.main?.filename || process.cwd());
export default path.dirname(require.main!.filename);
