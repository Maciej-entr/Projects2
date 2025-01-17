#include "default_actor.h"
#include <cstdlib>
#include <cmath>
#include <Eigen/Dense> // TODO: remove the following line

using namespace std;

default_actor::default_actor(sim::actor_state& initial_state, sim::world_model& world)
    : sim::actor(initial_state, world) {

    velocity = 1.34;
    go_to_mid_target = false;
    at_boundary = false;

    if(initial_state.id % 2 == 0) {
        blink_velocity = 3.0;
    } else {
        blink_velocity = 0.0;
    }
}

sim::actor_command default_actor::act_(sim::world_state& w_state) {
    sim::actor_state a_state = get_state();
    sim::world_model w_model = get_world();

    guid target_corner = a_state.target_corner;

    //std::cout << "target_corner is: " << target_corner << std::endl;
    //std::cout << "position: " << a_state.pose.position.x << ", " << a_state.pose.position.y << std::endl;

    std::map<guid, world::corners> corners = w_model.corners;
    std::map<guid, world::crosswalk> crosswalks = w_model.crosswalks;
    std::map<guid, world::cw_signals> cw_signals = w_model.cw_signals;

    guid current_corner_id = find_current_corner_id(a_state, w_model);

    //std::cout << "current_corner_id: " << current_corner_id << " - target corner id: " << target_corner << std::endl;
    //std::cout << "go to mid target is: " << go_to_mid_target << std::endl;

    // Code continues...
}
