import json
import io
import cherrypy
from configobj import ConfigObj
from collections import OrderedDict

class MenuItems(object):
	exposed = True
	
	@cherrypy.tools.accept(media='text/plain')
	@cherrypy.tools.json_in()
	@cherrypy.tools.json_out()
	def GET(self):
		# get data from file   
		return json.load(open("../json/menuItems.json"),object_pairs_hook=OrderedDict) 

class CurrentStatus(object):
	exposed = True
	
	@cherrypy.tools.accept(media='text/plain')
	@cherrypy.tools.json_in()
	@cherrypy.tools.json_out()
	def GET(self):
		# get data from file        
		conf_data = ConfigObj("../doc/curr_status.conf")
		return conf_data
		
class Architecture(object):
	exposed = True
	
	@cherrypy.tools.accept(media='text/plain')
	@cherrypy.tools.json_in()
	@cherrypy.tools.json_out()
	def GET(self):
		# get data from file 
		 conf_data = ConfigObj("../doc/arch.conf")
		 return conf_data
         

class Diagrams(object):
	exposed = True
	
	@cherrypy.tools.accept(media='text/plain')
	@cherrypy.tools.json_in()
	@cherrypy.tools.json_out()
	def GET(self):
		# get data from file                   
         return json.load(open("../json/arch.json"),object_pairs_hook=OrderedDict)          
			
class AccountInfo(object):
	exposed = True
	
	@cherrypy.tools.accept(media='text/plain')
	@cherrypy.tools.json_in()
	@cherrypy.tools.json_out()
	def GET(self):
		# get data from file 
		conf_data = ConfigObj("../doc/account_info.conf")
		return conf_data
        
cherrypy.config.update({
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
        
    cherrypy.tree.mount(MenuItems(), '/menuItems.json', config = conf)
    cherrypy.tree.mount(CurrentStatus(), '/currentStatus.json', config = conf)
    cherrypy.tree.mount(Architecture(), '/architecture.json', config = conf)
    cherrypy.tree.mount(AccountInfo(), '/accountInfo.json', config = conf)
    cherrypy.tree.mount(Diagrams(), '/diagrams.json', config = conf)
    cherrypy.engine.start()
    cherrypy.engine.block()	