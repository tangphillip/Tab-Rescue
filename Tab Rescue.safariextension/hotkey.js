if (window.top === window) {
	window.addEventListener("keydown", fireOnKeypress, false);
	
	function fireOnKeypress(e) {
		if (e.shiftKey && (e.ctrlKey || e.metaKey) && e.keyCode == 84){
			safari.self.tab.dispatchMessage("reopen");
			e.preventDefault();
		}
	}
}
