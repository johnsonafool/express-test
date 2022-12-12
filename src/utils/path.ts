import path from 'path';

// export default path.dirname(require.main?.filename || process.cwd());
export const getRootDir = path.dirname(require.main!.filename);
