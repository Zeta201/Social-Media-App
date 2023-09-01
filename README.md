minikube start --network-plugin=cni memory=4096
minikube ssh -- sudo mount bpffs -t bpf /sys/fs/bpf
kubectl create -f https://raw.githubusercontent.com/cilium/cilium/v1.9/install/kubernetes/quick-install.yaml
kubectl create -f https://raw.githubusercontent.com/cilium/cilium/v1.9/install/kubernetes/experimental-install.yaml
kubectl -n kube-system get pods --watch
kubectl create ns cilium-test
kubectl apply -n cilium-test -f https://raw.githubusercontent.com/cilium/cilium/v1.9/examples/kubernetes/connectivity-check/connectivity-check.yaml
kubectl get pods -n cilium-test
export CILIUM_NAMESPACE=kube-system
kubectl create -f https://raw.githubusercontent.com/cilium/cilium/v1.9/install/kubernetes/quick-hubble-install.yaml
export CILIUM_VERSION=1.9.1
helm template cilium cilium/cilium --version $CILIUM_VERSION \
--namespace $CILIUM_NAMESPACE \
--set hubble.tls.auto.method="cronJob" \
--set hubble.listenAddress=":4244" \
--set hubble.relay.enabled=true \
--set hubble.ui.enabled=true > cilium-with-hubble.yaml

