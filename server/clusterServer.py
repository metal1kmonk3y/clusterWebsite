import json
import io
import cherrypy
from configobj import ConfigObj

class CurrentStatus(object):
	exposed = True
	
	@cherrypy.tools.accept(media='text/plain')
	@cherrypy.tools.json_in()
	@cherrypy.tools.json_out()
	def GET(self):
		# get data from file
		conf_data = ConfigObj("../doc/current_status.conf")
		return conf_data
		
class Architecture(object):
	exposed = True
	
	@cherrypy.tools.accept(media='text/plain')
	@cherrypy.tools.json_in()
	@cherrypy.tools.json_out()
	def GET(self):
		# get data from file
		return json.dumps("../json/arch.json")

class AccountInfo(object):
	exposed = True
	
	@cherrypy.tools.accept(media='text/plain')
	@cherrypy.tools.json_in()
	@cherrypy.tools.json_out()
	def GET(self):
		# get data from file
		conf_data = ConfigObj("../doc/account_info.conf")
		return conf_data

cherrypy.config.update({'server.socket_host': '127.0.0.1',
                        'server.socket_port': 9099,
                       })

if __name__ == '__main__':
    conf = {
		'/': {
			'request.dispatch': cherrypy.dispatch.MethodDispatcher(),
			'tools.sessions.on': True,
            'tools.response_headers.on': True,
            'tools.response_headers.headers': [('Content-Type', 'text/plain')],
			}
        }
    cherrypy.tree.mount(CurrentStatus(), '/docs/currentStatus.json', config = conf)
    cherrypy.tree.mount(Architecture(), '/docs/architecture.json', config = conf)
    cherrypy.tree.mount(AccountInfo(), '/docs/accountInfo.json', config = conf)
    cherrypy.engine.start()
    cherrypy.engine.block()	