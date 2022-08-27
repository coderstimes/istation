(function(window, undefined) {
  'use strict';

  /*
  NOTE:
  ------
  PLACE HERE YOUR OWN JAVASCRIPT CODE IF NEEDED
  WE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR JAVASCRIPT CODE PLEASE CONSIDER WRITING YOUR SCRIPT HERE.  */
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log('dark');
}

})(window);

function parseUri(u) {
    try {
        var o = {
            key: ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'],
            q: {
                name: 'queryKey',
                parser: /(?:^|&)([^&=]*)=?([^&]*)/g
            },
            parser: {
                loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
            }
        };

        var m = o.parser.loose.exec(u);
        var uri = {};

        var i = 14;
        while (i--) {
            uri[o.key[i]] = m[i] || '';
        }

        uri[o.q.name] = {};
        uri[o.key[12]].replace(o.q.parser, function($0, $1, $2) {
            if ($1) uri[o.q.name][$1] = $2;
        });

        return uri;

    } catch (e) {
        this.reportError('Failed to get OD', e);
    }

    return u;
}