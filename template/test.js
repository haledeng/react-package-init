import {
	rename
} from 'fs';
rename(path.join(cwd, '.ignore'), path.join(cwd, '.npmignore'));