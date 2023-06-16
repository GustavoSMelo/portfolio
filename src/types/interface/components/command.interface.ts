export interface ICommand {
    bin:
        | 'help'
        | 'version'
        | 'gui'
        | 'error'
        | 'about'
        | 'education'
        | 'experience'
        | 'socialmedia'
        | 'personal'
        | 'contact'
        | 'clear';
}
